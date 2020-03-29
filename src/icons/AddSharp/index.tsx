import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><line x1={256} y1={112} x2={256} y2={400} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><line x1={400} y1={256} x2={112} y2={256} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;