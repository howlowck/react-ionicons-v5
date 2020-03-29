import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M280,81.5V48H232V81.5a191,191,0,0,0-84.43,32.13L120,86,86,120l25.59,25.59A191.17,191.17,0,0,0,64,272c0,105.87,86.13,192,192,192s192-86.13,192-192C448,174.26,374.58,93.34,280,81.5ZM256,320a48,48,0,0,1-16-93.25V136h32v90.75A48,48,0,0,1,256,320Z" /></svg>;
}

export default SvgComponent;