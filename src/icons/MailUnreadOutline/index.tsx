import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M320,96H88a40,40,0,0,0-40,40V376a40,40,0,0,0,40,40H422.73a40,40,0,0,0,40-40V239" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><polyline points="112 160 256 272 343 206.33" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><circle cx={431.95} cy={128.05} r={47.95} /><path d="M432,192a63.95,63.95,0,1,1,63.95-63.95A64,64,0,0,1,432,192Zm0-95.9a32,32,0,1,0,31.95,32A32,32,0,0,0,432,96.1Z" /></svg>;
}

export default SvgComponent;