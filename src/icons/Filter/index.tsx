import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M472,168H40a24,24,0,0,1,0-48H472a24,24,0,0,1,0,48Z" /><path d="M392,280H120a24,24,0,0,1,0-48H392a24,24,0,0,1,0,48Z" /><path d="M296,392H216a24,24,0,0,1,0-48h80a24,24,0,0,1,0,48Z" /></svg>;
}

export default SvgComponent;