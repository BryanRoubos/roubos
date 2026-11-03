// A very small neural network (2 inputs -> H tanh units -> 1 sigmoid output),
// trained with full-batch gradient descent. Used for the live hero demo.
export type Point = { x: number; y: number; label: 0 | 1 };

export type Net = { w1: number[][]; b1: number[]; w2: number[]; b2: number; hidden: number };

// Small seeded generator so the demo looks the same on every load.
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// Two classes: a dot cluster in the middle and a ring around it.
export function makeData(n = 120, seed = 7): Point[] {
  const rand = rng(seed);
  const pts: Point[] = [];
  for (let i = 0; i < n; i++) {
    const inner = i % 2 === 0;
    const r = inner ? rand() * 0.38 : 0.62 + rand() * 0.28;
    const a = rand() * Math.PI * 2;
    pts.push({ x: r * Math.cos(a), y: r * Math.sin(a), label: inner ? 1 : 0 });
  }
  return pts;
}

export function makeNet(hidden = 8, seed = 3): Net {
  const rand = rng(seed);
  const g = () => (rand() - 0.5) * 2;
  return {
    hidden,
    w1: Array.from({ length: hidden }, () => [g() * 1.2, g() * 1.2]),
    b1: Array.from({ length: hidden }, () => g() * 0.3),
    w2: Array.from({ length: hidden }, () => g() * 0.8),
    b2: 0,
  };
}

export function predict(net: Net, x: number, y: number): number {
  let z = net.b2;
  for (let j = 0; j < net.hidden; j++) {
    z += net.w2[j] * Math.tanh(net.w1[j][0] * x + net.w1[j][1] * y + net.b1[j]);
  }
  return 1 / (1 + Math.exp(-z));
}

// One full-batch gradient step. Returns the average cross-entropy loss before the step.
export function trainStep(net: Net, data: Point[], lr = 0.35): number {
  const H = net.hidden;
  const gw1 = net.w1.map(() => [0, 0]);
  const gb1 = new Array(H).fill(0);
  const gw2 = new Array(H).fill(0);
  let gb2 = 0;
  let loss = 0;
  for (const p of data) {
    const h = new Array(H);
    let z = net.b2;
    for (let j = 0; j < H; j++) {
      h[j] = Math.tanh(net.w1[j][0] * p.x + net.w1[j][1] * p.y + net.b1[j]);
      z += net.w2[j] * h[j];
    }
    const o = 1 / (1 + Math.exp(-z));
    loss += -(p.label * Math.log(o + 1e-9) + (1 - p.label) * Math.log(1 - o + 1e-9));
    const dz = o - p.label;
    gb2 += dz;
    for (let j = 0; j < H; j++) {
      gw2[j] += dz * h[j];
      const dh = dz * net.w2[j] * (1 - h[j] * h[j]);
      gw1[j][0] += dh * p.x;
      gw1[j][1] += dh * p.y;
      gb1[j] += dh;
    }
  }
  const n = data.length;
  for (let j = 0; j < H; j++) {
    net.w1[j][0] -= (lr * gw1[j][0]) / n;
    net.w1[j][1] -= (lr * gw1[j][1]) / n;
    net.b1[j] -= (lr * gb1[j]) / n;
    net.w2[j] -= (lr * gw2[j]) / n;
  }
  net.b2 -= (lr * gb2) / n;
  return loss / n;
}

export function accuracy(net: Net, data: Point[]): number {
  let ok = 0;
  for (const p of data) if ((predict(net, p.x, p.y) > 0.5 ? 1 : 0) === p.label) ok++;
  return ok / data.length;
}
