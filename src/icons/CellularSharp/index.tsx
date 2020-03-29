import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M496,432H400V80h96Z" /><path d="M368,432H272V160h96Z" /><path d="M240,432H144V224h96Z" /><path d="M112,432H16V288h96Z" /></svg>;
}

export default SvgComponent;