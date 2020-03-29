import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M224,432H144V80h80Z" /><path d="M368,432H288V80h80Z" /></svg>;
}

export default SvgComponent;