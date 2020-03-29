import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M16,464,496,256,16,48V208l320,48L16,304Z" /></svg>;
}

export default SvgComponent;