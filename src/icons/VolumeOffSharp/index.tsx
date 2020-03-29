import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="237.65 176.1 144 176.1 144 335.9 237.65 335.9 368 440 368 72 237.65 176.1" /></svg>;
}

export default SvgComponent;