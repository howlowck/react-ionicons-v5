import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="448 368 256 144 64 368 448 368" /></svg>;
}

export default SvgComponent;