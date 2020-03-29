import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M17,384H449V128H17ZM49,160H417V352H49Z" /><rect x={70.69} y={182.94} width={324.63} height={146.13} /><rect x={465} y={202.67} width={32} height={106.67} /></svg>;
}

export default SvgComponent;