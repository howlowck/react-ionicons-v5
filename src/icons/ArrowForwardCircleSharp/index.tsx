import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM240,336.09,303.58,272H154V240H303.58L240,175.91l22.71-22.54L364.54,256,262.7,358.63Z" /></svg>;
}

export default SvgComponent;