import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><line x1={144} y1={144} x2={464} y2={144} style={{
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: 48
    }} /><line x1={144} y1={256} x2={464} y2={256} style={{
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: 48
    }} /><line x1={144} y1={368} x2={464} y2={368} style={{
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: 48
    }} /><rect x={64} y={128} width={32} height={32} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><rect x={64} y={240} width={32} height={32} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><rect x={64} y={352} width={32} height={32} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;