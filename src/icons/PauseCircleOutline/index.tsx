import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style={{
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><line x1={208} y1={192} x2={208} y2={320} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /><line x1={304} y1={192} x2={304} y2={320} style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;