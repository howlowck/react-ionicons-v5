import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polyline points="112 328 256 184 400 328" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 48
    }} /></svg>;
}

export default SvgComponent;