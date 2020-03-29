import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polyline points="432 320 432 432 320 432" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><line x1={421.8} y1={421.77} x2={304} y2={304} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><polyline points="80 192 80 80 192 80" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><line x1={90.2} y1={90.23} x2={208} y2={208} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><polyline points="320 80 432 80 432 192" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><line x1={421.77} y1={90.2} x2={304} y2={208} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><polyline points="192 432 80 432 80 320" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><line x1={90.23} y1={421.8} x2={208} y2={304} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;