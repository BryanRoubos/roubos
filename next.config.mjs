/** @type {import('next').NextConfig} */
const nextConfig={
 reactStrictMode:true,
 async redirects(){return [
 {source:"/blog",destination:"/where-the-light-falls",permanent:true},
 {source:"/contact",destination:"/about",permanent:true},
 {source:"/writing",destination:"/where-the-light-falls#writing",permanent:true},
 {source:"/3d-games",destination:"/where-the-light-falls",permanent:true},
 ];}
};
export default nextConfig;
