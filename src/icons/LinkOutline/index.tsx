import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M208,352H144a96,96,0,0,1,0-192h64" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 36
    }} /><path d="M304,160h64a96,96,0,0,1,0,192H304" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 36
    }} /><line x1={163.29} y1={256} x2={350.71} y2={256} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 36
    }} /></svg>;
}

export default SvgComponent;