import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="0 48 192 288 192 416 320 464 320 288 512 48 0 48" /></svg>;
}

export default SvgComponent;