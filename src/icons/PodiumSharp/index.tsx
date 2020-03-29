import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><rect x={160} y={32} width={192} height={448} /><rect x={384} y={192} width={112} height={288} /><rect x={16} y={128} width={112} height={352} /></svg>;
}

export default SvgComponent;