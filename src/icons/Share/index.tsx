import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M376,176H272V321a16,16,0,0,1-32,0V176H136a56.06,56.06,0,0,0-56,56V424a56.06,56.06,0,0,0,56,56H376a56.06,56.06,0,0,0,56-56V232A56.06,56.06,0,0,0,376,176Z" /><path d="M272,86.63l52.69,52.68a16,16,0,0,0,22.62-22.62l-80-80a16,16,0,0,0-22.62,0l-80,80a16,16,0,0,0,22.62,22.62L240,86.63V176h32Z" /></svg>;
}

export default SvgComponent;