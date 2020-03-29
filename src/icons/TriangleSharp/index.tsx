import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="256 32 20 464 492 464 256 32" /></svg>;
}

export default SvgComponent;