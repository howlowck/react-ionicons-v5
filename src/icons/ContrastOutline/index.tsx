import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><circle cx={256} cy={256} r={208} style={{
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><path d="M256,464C141.12,464,48,370.88,48,256S141.12,48,256,48Z" /></svg>;
}

export default SvgComponent;