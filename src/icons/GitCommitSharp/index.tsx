import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M480,224H380a128,128,0,0,0-247.9,0H32v64H132.05A128,128,0,0,0,380,288H480ZM256,320a64,64,0,1,1,64-64A64.07,64.07,0,0,1,256,320Z" /></svg>;
}

export default SvgComponent;