import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M368,112H144a144,144,0,0,0,0,288H368a144,144,0,0,0,0-288Zm0,230a86,86,0,1,1,86-86A85.88,85.88,0,0,1,368,342Z" /></svg>;
}

export default SvgComponent;