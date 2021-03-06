import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M448,256,272,88v96C103.57,184,64,304.77,64,424c48.61-62.24,91.6-96,208-96v96Z" style={{
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;