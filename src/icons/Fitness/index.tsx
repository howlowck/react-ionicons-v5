import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M193.69,152.84a16,16,0,0,1,29.64,2.56l36.4,121.36,30-59.92a16,16,0,0,1,28.62,0L345.89,272h96.76A213.08,213.08,0,0,0,464,176.65C463.37,114.54,413.54,64,352.92,64c-48.09,0-80,29.54-96.92,51-16.88-21.49-48.83-51-96.92-51C98.46,64,48.63,114.54,48,176.65A211.13,211.13,0,0,0,56.93,240h93.18Z" /><path d="M321.69,295.16,304,259.78l-33.69,67.38A16,16,0,0,1,256,336q-.67,0-1.38-.06a16,16,0,0,1-14-11.34l-36.4-121.36-30,59.92A16,16,0,0,1,160,272H69.35q14,29.29,37.27,57.66c18.77,22.88,52.8,59.46,131.39,112.81a31.84,31.84,0,0,0,36,0c78.59-53.35,112.62-89.93,131.39-112.81a316.79,316.79,0,0,0,19-25.66H336A16,16,0,0,1,321.69,295.16Z" /><path d="M464,272H442.65a260.11,260.11,0,0,1-18.25,32H464a16,16,0,0,0,0-32Z" /><path d="M48,240a16,16,0,0,0,0,32H69.35a225.22,225.22,0,0,1-12.42-32Z" /></svg>;
}

export default SvgComponent;