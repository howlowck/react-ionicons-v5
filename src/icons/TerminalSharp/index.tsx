import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M16,44V468a12,12,0,0,0,12,12H484a12,12,0,0,0,12-12V44a12,12,0,0,0-12-12H28A12,12,0,0,0,16,44ZM73.51,237.5,150.39,176,73.51,114.5l20-25L201.61,176,93.5,262.49ZM272,256H176V224h96Z" /></svg>;
}

export default SvgComponent;