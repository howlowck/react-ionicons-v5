import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><polygon points="496 496 16 496 16 16 48 16 48 464 496 464 496 496" /><path d="M192,432H80V208H192Z" /><path d="M336,432H224V160H336Z" /><path d="M479.64,432h-112V96h112Z" /></svg>;
}

export default SvgComponent;