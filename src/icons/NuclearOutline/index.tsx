import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><circle cx={256} cy={256} r={192} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><circle cx={256} cy={256} r={64} style={{
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><line x1={224} y1={192} x2={171} y2={85} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><line x1={288} y1={192} x2={341} y2={85} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><line x1={327.55} y1={255.81} x2={446.96} y2={255.94} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><line x1={299.09} y1={313.13} x2={371.34} y2={408.19} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><line x1={184.45} y1={255.81} x2={65.04} y2={255.94} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><line x1={212.91} y1={313.13} x2={140.66} y2={408.19} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;