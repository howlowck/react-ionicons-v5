import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M128,496H48V304h80Z" /><path d="M352,496H272V208h80Z" /><path d="M464,496H384V96h80Z" /><path d="M240,496H160V16h80Z" /></svg>;
}

export default SvgComponent;