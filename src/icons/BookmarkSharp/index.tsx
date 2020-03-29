import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M416,480,256,357.41,96,480V32H416Z" /></svg>;
}

export default SvgComponent;