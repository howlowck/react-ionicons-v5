import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="256 370.43 96 279 96 377.42 256 466.3 416 377.42 416 279 256 370.43" /><polygon points="512.25 192 256 45.57 -0.25 192 256 338.43 464 219.57 464 384 512 384 512 192.14 512.25 192" /></svg>;
}

export default SvgComponent;