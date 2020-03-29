import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="96 448 416 256 96 64 96 448" /></svg>;
}

export default SvgComponent;