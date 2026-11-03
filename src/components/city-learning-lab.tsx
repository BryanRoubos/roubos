"use client";

import { useState } from "react";

type Position = { x: number; y: number };
const W = 10, H = 7;
const start: Position = { x: 0, y: 5 };
const goal: Position = { x: 9, y: 1 };
const walls = new Set(["2,0","2,1","2,2","2,3","2,5","4,3","5,3","6,3","7,3","7,4","7,5","5,0","5,1","5,2"]);
const checkpoints = new Set(["2,4","7,2"]);
const risks = new Set(["3,5","4,5","6,4","8,4","8,3"]);
const deltas: Position[] = [{x:0,y:-1},{x:1,y:0},{x:0,y:1},{x:-1,y:0}];
const key = (p: Position) => `${p.x},${p.y}`;
const same = (a: Position,b: Position) => a.x===b.x && a.y===b.y;
const cell = (p: Position) => same(p,start)?"start":same(p,goal)?"goal":walls.has(key(p))?"wall":checkpoints.has(key(p))?"checkpoint":risks.has(key(p))?"risk":"street";
const move = (p: Position,a: number) => {
  const next={x:p.x+deltas[a].x,y:p.y+deltas[a].y};
  return next.x<0||next.y<0||next.x>=W||next.y>=H||walls.has(key(next))?p:next;
};
const reward = (p: Position,n: Position) => same(n,goal)?40:same(p,n)?-5:checkpoints.has(key(n))?-5:risks.has(key(n))?-4:-1;
const blank = () => Array.from({length: W*H},()=>[0,0,0,0]);
const index = (p: Position) => p.y*W+p.x;
const best = (q: number[][],p: Position) => {
  const row=q[index(p)], maximum=Math.max(...row);
  return [1,0,2,3].find(a=>row[a]===maximum)??0;
};
function evaluate(q: number[][]) {
  let p=start, total=0;
  const path: Position[]=[p], visits=new Map<string,number>();
  for(let i=0;i<80;i++){
    const next=move(p,best(q,p)); total+=reward(p,next);p=next;path.push(p);
    if(same(p,goal)) return {path,success:true,score:total};
    const count=(visits.get(key(p))??0)+1;visits.set(key(p),count);
    if(count>5)break;
  }
  return {path,success:false,score:total};
}
function train(q: number[][],count: number){
  let wins=0;
  for(let episode=0;episode<count;episode++){
    let p=start;
    const epsilon=Math.max(0.07,0.8*Math.exp(-episode/65));
    for(let step=0;step<95;step++){
      const a=Math.random()<epsilon?Math.floor(Math.random()*4):best(q,p);
      const next=move(p,a),r=reward(p,next),done=same(next,goal);
      q[index(p)][a]+=0.24*(r+(done?0:0.95*Math.max(...q[index(next)]))-q[index(p)][a]);
      p=next;
      if(done){wins++;break;}
    }
  }
  return wins;
}
export function CityLearningLab(){
  const [q,setQ]=useState<number[][]>(()=>blank());
  const [episodes,setEpisodes]=useState(0);
  const [wins,setWins]=useState(0);
  const [showPolicy,setShowPolicy]=useState(false);
  const evaluated=evaluate(q);
  const route=new Set(evaluated.path.map(key));
  const handleTrain=()=>{
    const updated=q.map(row=>[...row]);
    const result=train(updated,400);
    setQ(updated);setEpisodes(episodes+400);setWins(result);
  };
  const handleReset=()=>{setQ(blank());setEpisodes(0);setWins(0);};
  return <div className="city-lab">
    <div className="lab-head"><span>FIELD STUDY / 001</span><span className="lab-live"><i/> LIVE IN YOUR BROWSER</span></div>
    <div className="lab-title"><div><span className="lab-eyebrow">FANTASY WORLD AI LAB</span><h3>Learning the crossing.</h3></div><span className="lab-version">Q-LEARNING / V0.1</span></div>
    <p className="lab-description">A small agent learns a route through a divided city. Train it, then see how it navigates walls, checkpoints, and risky streets. The rewards and decisions are calculated—not animated placeholders.</p>
    <div className="lab-map" role="img" aria-label={`City grid. The learned route ${evaluated.success?"reaches":"does not yet reach"} the destination after ${episodes} training episodes.`}>
      {Array.from({length:W*H},(_,i)=>{
        const p={x:i%W,y:Math.floor(i/W)},type=cell(p);
        const active=route.has(key(p))&&type!=="wall";
        return <div key={i} className={`lab-cell lab-${type} ${active&&showPolicy?"lab-route":""}`} title={`${type}: ${p.x}, ${p.y}`}>
          {type==="start"?"S":type==="goal"?"G":type==="checkpoint"?"◇":type==="risk"?"·":null}
          {active&&showPolicy&&type==="street"?<span className="route-point"/>:null}
        </div>;
      })}
    </div>
    <div className="lab-legend"><span><i className="legend-start"/>Start</span><span><i className="legend-goal"/>Goal</span><span><i className="legend-check"/>Checkpoint</span><span><i className="legend-risk"/>Risk</span></div>
    <div className="lab-stats"><div><span>EPISODES COMPLETED</span><strong>{episodes.toLocaleString("en-US")}</strong></div><div><span>LAST BATCH SUCCESS</span><strong>{episodes?Math.round(wins/400*100)+"%":"—"}</strong></div><div><span>GREEDY POLICY</span><strong>{evaluated.success?"REACHES GOAL":"LEARNING"}</strong></div></div>
    <div className="lab-controls"><button type="button" onClick={handleTrain}>Train 400 episodes ↗</button><button type="button" className="lab-secondary" onClick={()=>setShowPolicy(v=>!v)} aria-pressed={showPolicy}>{showPolicy?"Hide":"Show"} learned route</button><button type="button" className="lab-secondary" onClick={handleReset}>Reset</button></div>
    <p className="lab-note">Educational tabular Q-learning in a simplified environment. Rewards and success rates describe the agent, not my personal skill level.</p>
  </div>;
}
