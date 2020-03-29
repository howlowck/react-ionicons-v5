import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polyline points="465 127 241 384 149 292" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 44
    }} /><line x1={140} y1={385} x2={47} y2={292} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 44
    }} /><line x1={363} y1={127} x2={236} y2={273} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 44
    }} /></svg>;
}

export default SvgComponent;