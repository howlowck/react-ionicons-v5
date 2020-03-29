import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="496 16 15.88 208 195 289 448 64 223 317 304 496 496 16" /></svg>;
}

export default SvgComponent;