import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polyline points="262.62 336 342 256 262.62 176" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><line x1={330.97} y1={256} x2={170} y2={256} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><path d="M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z" style={{
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;