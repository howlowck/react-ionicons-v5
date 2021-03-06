import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><circle cx={216} cy={296} r={152} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><polyline points="448 160 448 64 352 64" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><line x1={324} y1={188} x2={448} y2={64} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>;
}

export default SvgComponent;