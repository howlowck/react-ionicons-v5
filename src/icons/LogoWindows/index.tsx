import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M480,265H232V444l248,36V265Z" /><path d="M216,265H32V415l184,26.7V265Z" /><path d="M480,32,232,67.4V249H480V32Z" /><path d="M216,69.7,32,96V249H216V69.7Z" /></svg>;
}

export default SvgComponent;