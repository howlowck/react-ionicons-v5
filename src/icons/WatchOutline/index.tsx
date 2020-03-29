import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><rect x={112} y={112} width={288} height={288} rx={64} ry={64} style={{
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><path d="M176,112V40a8,8,0,0,1,8-8H328a8,8,0,0,1,8,8v72" style={{
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><path d="M336,400v72a8,8,0,0,1-8,8H184a8,8,0,0,1-8-8V400" style={{
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;