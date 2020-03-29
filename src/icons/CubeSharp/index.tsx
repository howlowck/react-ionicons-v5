import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="48 170 48 366.92 240 480 240 284 48 170" /><path d="M272,480,464,366.92V170L272,284ZM448,357.64h0Z" /><polygon points="448 144 256 32 64 144 256 256 448 144" /></svg>;
}

export default SvgComponent;