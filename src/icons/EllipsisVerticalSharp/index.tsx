import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><circle cx={256} cy={256} r={48} /><circle cx={256} cy={416} r={48} /><circle cx={256} cy={96} r={48} /></svg>;
}

export default SvgComponent;