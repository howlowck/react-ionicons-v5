import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><rect x={80} y={80} width={352} height={352} /></svg>;
}

export default SvgComponent;