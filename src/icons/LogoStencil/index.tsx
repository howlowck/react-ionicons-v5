import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M188.8,334.07H386.13L279.47,448H83.2Z" /><path d="M512,199H106.61L0,313H405.39Z" /><path d="M232.2,64H428.8L322.62,177.93H125.87Z" /></svg>;
}

export default SvgComponent;