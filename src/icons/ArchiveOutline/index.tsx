import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M80,152V408a40.12,40.12,0,0,0,40,40H392a40.12,40.12,0,0,0,40-40V152" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><rect x={48} y={64} width={416} height={80} rx={28} ry={28} style={{
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><polyline points="320 304 256 368 192 304" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><line x1={256} y1={345.89} x2={256} y2={224} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;