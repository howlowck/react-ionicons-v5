import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><line x1={80} y1={160} x2={432} y2={160} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><line x1={80} y1={256} x2={432} y2={256} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><line x1={80} y1={352} x2={432} y2={352} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;