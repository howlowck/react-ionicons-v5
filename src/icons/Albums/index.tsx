import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M368,96H144a16,16,0,0,1,0-32H368a16,16,0,0,1,0,32Z" /><path d="M400,144H112a16,16,0,0,1,0-32H400a16,16,0,0,1,0,32Z" /><path d="M419.13,448H92.87A44.92,44.92,0,0,1,48,403.13V204.87A44.92,44.92,0,0,1,92.87,160H419.13A44.92,44.92,0,0,1,464,204.87V403.13A44.92,44.92,0,0,1,419.13,448Z" /></svg>;
}

export default SvgComponent;