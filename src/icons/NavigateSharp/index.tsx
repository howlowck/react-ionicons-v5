import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="480 32 32 240 272 240 272 480 480 32" /></svg>;
}

export default SvgComponent;