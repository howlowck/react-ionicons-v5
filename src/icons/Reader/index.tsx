import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M368,32H144A64.07,64.07,0,0,0,80,96V416a64.07,64.07,0,0,0,64,64H368a64.07,64.07,0,0,0,64-64V96A64.07,64.07,0,0,0,368,32ZM256,304H176a16,16,0,0,1,0-32h80a16,16,0,0,1,0,32Zm80-80H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Zm0-80H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Z" /></svg>;
}

export default SvgComponent;