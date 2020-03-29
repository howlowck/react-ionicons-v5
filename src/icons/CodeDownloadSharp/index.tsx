import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polyline points="160 368 32 256 160 144" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 42
    }} /><polyline points="352 368 480 256 352 144" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 42
    }} /><polyline points="192 288.1 256 352 320 288.1" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 42
    }} /><line x1={256} y1={160} x2={256} y2={336.03} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 42
    }} /></svg>;
}

export default SvgComponent;