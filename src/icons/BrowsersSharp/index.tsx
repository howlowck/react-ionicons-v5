import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M32,64V448a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V64a16,16,0,0,0-16-16H48A16,16,0,0,0,32,64ZM440,428H72a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4H440a4,4,0,0,1,4,4V424A4,4,0,0,1,440,428Z" /></svg>;
}

export default SvgComponent;