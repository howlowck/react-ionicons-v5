import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="144 448 368 256 144 64 144 448" /></svg>;
}

export default SvgComponent;