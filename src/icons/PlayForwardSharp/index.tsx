import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="16 400 256 256 16 112 16 400" /><polygon points="256 400 496 256 256 112 256 400" /></svg>;
}

export default SvgComponent;