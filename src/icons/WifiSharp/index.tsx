import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M332.69,320a115,115,0,0,0-152.8,0" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeLinejoin: "round",
      strokeWidth: 42
    }} /><path d="M393.74,259a201.26,201.26,0,0,0-274.92,0" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeLinejoin: "round",
      strokeWidth: 42
    }} /><path d="M448,191.52a288,288,0,0,0-383.44,0" style={{
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      strokeLinejoin: "round",
      strokeWidth: 42
    }} /><path d="M300.67,384,256,433l-44.34-49a56.73,56.73,0,0,1,88.92,0Z" /></svg>;
}

export default SvgComponent;