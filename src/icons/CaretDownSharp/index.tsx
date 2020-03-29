import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="64 144 256 368 448 144 64 144" /></svg>;
}

export default SvgComponent;