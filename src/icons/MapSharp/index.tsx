import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M327.71,130.93,184,39,32,144V480l152.29-98.93L328,473,480,368V32ZM312,421,200,349V91l112,72Z" /></svg>;
}

export default SvgComponent;