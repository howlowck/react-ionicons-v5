import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><rect x={48} y={96} width={416} height={304} rx={32.14} ry={32.14} style={{
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><line x1={16} y1={416} x2={496} y2={416} style={{
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;