import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M128,464V384H56a24,24,0,0,1-24-24V72A24,24,0,0,1,56,48H456a24,24,0,0,1,24,24V360a24,24,0,0,1-24,24H245.74ZM456,80h0Z" /></svg>;
}

export default SvgComponent;