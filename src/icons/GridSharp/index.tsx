import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M240,240H32V32H240Z" /><path d="M480,240H272V32H480Z" /><path d="M240,480H32V272H240Z" /><path d="M480,480H272V272H480Z" /></svg>;
}

export default SvgComponent;