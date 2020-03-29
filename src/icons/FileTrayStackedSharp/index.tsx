import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M448,16H64L32,176V320H480V176ZM436,176H320a64,64,0,0,1-128,0H76L98,58H414Z" /><path d="M320,352a64,64,0,0,1-128,0H32V496H480V352Z" /></svg>;
}

export default SvgComponent;