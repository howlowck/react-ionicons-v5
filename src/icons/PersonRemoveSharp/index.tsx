import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><rect x={16} y={214} width={144} height={36} /><circle cx={288} cy={144} r={112} /><path d="M288,288c-69.42,0-208,42.88-208,128v64H496V416C496,330.88,357.42,288,288,288Z" /></svg>;
}

export default SvgComponent;