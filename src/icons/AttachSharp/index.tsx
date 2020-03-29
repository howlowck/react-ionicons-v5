import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M216.08,192V335.55a40.08,40.08,0,0,0,80.15,0L296.36,147a67.94,67.94,0,1,0-135.87,0V336.82a95.51,95.51,0,0,0,191,0V159.44" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;