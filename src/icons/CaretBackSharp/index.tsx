import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="368 64 144 256 368 448 368 64" /></svg>;
}

export default SvgComponent;