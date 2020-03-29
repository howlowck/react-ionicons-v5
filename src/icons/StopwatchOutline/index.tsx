import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><line x1={256} y1={232} x2={256} y2={152} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><line x1={256} y1={88} x2={256} y2={72} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 48
    }} /><line x1={132} y1={132} x2={120} y2={120} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 48
    }} /><circle cx={256} cy={272} r={32} style={{
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><path d="M256,96A176,176,0,1,0,432,272,176,176,0,0,0,256,96Z" style={{
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;