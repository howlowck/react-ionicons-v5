import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M368,112H144C64.6,112,0,176.6,0,256S64.6,400,144,400H368c79.4,0,144-64.6,144-144S447.4,112,368,112Zm0,256A112,112,0,1,1,480,256,112.12,112.12,0,0,1,368,368Z" /></svg>;
}

export default SvgComponent;