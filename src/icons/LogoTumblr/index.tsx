import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M390,32H120c-49.19,0-88,38.81-88,88V390c0,49.19,38.81,90,88,90H390c49.19,0,90-40.81,90-90V120C480,70.81,439.19,32,390,32ZM336,396H284c-42.51,0-72-23.68-72-76V240H176V192c42.51-11,57.95-48.32,60-80h44v72h52v56H280l-.39,70.51c0,21.87,11,29.43,28.62,29.43L336,340Z" /></svg>;
}

export default SvgComponent;