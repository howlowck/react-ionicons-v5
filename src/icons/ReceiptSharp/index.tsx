import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M448,48,416,32,384,48,352,32,320,48,288,32,256,48,224,32,192,48,144,32V288s0,.05,0,.05H368V424c0,30.93,33.07,56,64,56h12c30.93,0,52-25.07,52-56V32ZM272.5,240l-.5-32H431.5l.5,32Zm-64-80-.5-32H431.5l.5,32Z" /><path d="M336,424V320H16v32c0,50.55,5.78,71.62,14.46,87.63C45.19,466.8,71.86,480,112,480H368S336,460,336,424Z" /></svg>;
}

export default SvgComponent;