import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M496,176H16v64H37.24L49.68,352H221.55L240,241.32V240a16,16,0,0,1,32,0v1.32L290.45,352H462.32l12.44-112H496Z" /></svg>;
}

export default SvgComponent;