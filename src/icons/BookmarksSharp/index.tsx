import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="112 0 112 48 416 48 416 416 464 448 464 0 112 0" /><polygon points="48 80 48 512 216 388 384 512 384 80 48 80" /></svg>;
}

export default SvgComponent;