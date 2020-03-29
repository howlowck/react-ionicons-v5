import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="368.53 64 368.53 227.52 96 64 96 448 368.53 284.48 368.53 448 416 448 416 64 368.53 64" /></svg>;
}

export default SvgComponent;