import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M256,32A224,224,0,0,0,97.61,414.39,224,224,0,1,0,414.39,97.61,222.53,222.53,0,0,0,256,32ZM64,256C64,150.13,150.13,64,256,64V448C150.13,448,64,361.87,64,256Z" /></svg>;
}

export default SvgComponent;