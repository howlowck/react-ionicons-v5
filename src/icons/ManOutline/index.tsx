import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M208,208V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><path d="M256,336V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24V208" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><path d="M208,192v88a23.72,23.72,0,0,1-24,24h0a23.72,23.72,0,0,1-24-24V192a48,48,0,0,1,48-48h96a48,48,0,0,1,48,48v88a23.72,23.72,0,0,1-24,24h0a23.72,23.72,0,0,1-24-24V192" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><circle cx={256} cy={56} r={40} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;