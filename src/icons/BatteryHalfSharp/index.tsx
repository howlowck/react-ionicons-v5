import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M17,384H449V128H17ZM49,160H417V352H49Z" /><rect x={70.69} y={182.92} width={185.31} height={146.16} /><rect x={465} y={202.67} width={32} height={106.67} /></svg>;
}

export default SvgComponent;