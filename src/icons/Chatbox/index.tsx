import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M144,464a16,16,0,0,1-16-16V384H104a72.08,72.08,0,0,1-72-72V120a72.08,72.08,0,0,1,72-72H408a72.08,72.08,0,0,1,72,72V312a72.08,72.08,0,0,1-72,72H245.74l-91.49,76.29A16.05,16.05,0,0,1,144,464Z" /></svg>;
}

export default SvgComponent;