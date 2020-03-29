import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="143.47 64 143.47 227.52 416 64 416 448 143.47 284.48 143.47 448 96 448 96 64 143.47 64" /></svg>;
}

export default SvgComponent;