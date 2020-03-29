import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><line x1={102} y1={304} x2={410} y2={304} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 44
    }} /><line x1={102} y1={208} x2={410} y2={208} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 44
    }} /><line x1={102} y1={112} x2={410} y2={112} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 44
    }} /><line x1={102} y1={400} x2={410} y2={400} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 44
    }} /></svg>;
}

export default SvgComponent;