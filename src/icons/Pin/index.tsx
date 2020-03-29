import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M336,96a80,80,0,1,0-96,78.39V457.56a32.09,32.09,0,0,0,2.49,12.38l10.07,24a3.92,3.92,0,0,0,6.88,0l10.07-24A32.09,32.09,0,0,0,272,457.56V174.39A80.13,80.13,0,0,0,336,96Zm-56,0a24,24,0,1,1,24-24A24,24,0,0,1,280,96Z" /></svg>;
}

export default SvgComponent;