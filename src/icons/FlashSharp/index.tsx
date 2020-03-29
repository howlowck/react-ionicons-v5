import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M432,208H288L320,16,80,304H224L192,496Z" /></svg>;
}

export default SvgComponent;