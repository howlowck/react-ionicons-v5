import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><circle cx={256} cy={256} r={26} /><circle cx={256} cy={346} r={26} /><circle cx={256} cy={166} r={26} /><path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style={{
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: 10,
      strokeWidth: 32
    }} /></svg>;
}

export default SvgComponent;