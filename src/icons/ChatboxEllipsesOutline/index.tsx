import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M408,64H104a56.16,56.16,0,0,0-56,56V312a56.16,56.16,0,0,0,56,56h40v80l93.72-78.14a8,8,0,0,1,5.13-1.86H408a56.16,56.16,0,0,0,56-56V120A56.16,56.16,0,0,0,408,64Z" style={{
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: 32
    }} /><circle cx={160} cy={216} r={32} /><circle cx={256} cy={216} r={32} /><circle cx={352} cy={216} r={32} /></svg>;
}

export default SvgComponent;