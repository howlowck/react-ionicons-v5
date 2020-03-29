import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><rect x={128} y={64} width={256} height={32} /><rect x={96} y={112} width={320} height={32} /><path d="M464,448H48V160H464Z" /></svg>;
}

export default SvgComponent;