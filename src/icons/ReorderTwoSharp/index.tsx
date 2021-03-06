import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><line x1={118} y1={304} x2={394} y2={304} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeLinejoin: "round",
      strokeWidth: 44
    }} /><line x1={118} y1={208} x2={394} y2={208} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeLinejoin: "round",
      strokeWidth: 44
    }} /></svg>;
}

export default SvgComponent;