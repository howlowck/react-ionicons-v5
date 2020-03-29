import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><rect x={48} y={48} width={112} height={112} rx={8} ry={8} /><rect x={200} y={48} width={112} height={112} rx={8} ry={8} /><rect x={352} y={48} width={112} height={112} rx={8} ry={8} /><rect x={48} y={200} width={112} height={112} rx={8} ry={8} /><rect x={200} y={200} width={112} height={112} rx={8} ry={8} /><rect x={352} y={200} width={112} height={112} rx={8} ry={8} /><rect x={48} y={352} width={112} height={112} rx={8} ry={8} /><rect x={200} y={352} width={112} height={112} rx={8} ry={8} /><rect x={352} y={352} width={112} height={112} rx={8} ry={8} /></svg>;
}

export default SvgComponent;