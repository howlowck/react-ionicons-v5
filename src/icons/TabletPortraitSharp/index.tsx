import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M430,0H82A18,18,0,0,0,64,18V494a18,18,0,0,0,18,18H430a18,18,0,0,0,18-18V18A18,18,0,0,0,430,0ZM100,448V64H412V448Z" /></svg>;
}

export default SvgComponent;