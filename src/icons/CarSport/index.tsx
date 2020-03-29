import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 512 512" {...props}><path d="M494.26,276.22c-3.6-40.41-9.53-48.28-11.77-51.24-5.15-6.84-13.39-11.31-22.11-16l0,0a3.6,3.6,0,0,1-.91-5.68A15.93,15.93,0,0,0,464,190.77,16.27,16.27,0,0,0,447.65,176h-15.6a17,17,0,0,0-2,.13,8.5,8.5,0,0,0-1.41-.47l0,0c-9.24-19.53-21.89-46.27-48.11-59.32C341.64,97,270,96,256,96s-85.64,1-124.48,20.31c-26.22,13.05-38.87,39.79-48.11,59.32l-.08.16a6.52,6.52,0,0,0-1.35.34,17,17,0,0,0-2-.13H64.35A16.27,16.27,0,0,0,48,190.77a15.93,15.93,0,0,0,4.59,12.47,3.6,3.6,0,0,1-.91,5.68l0,0c-8.72,4.72-17,9.19-22.11,16-2.24,3-8.16,10.83-11.77,51.24-2,22.74-2.3,46.28-.73,61.44,3.29,31.5,9.46,50.54,9.72,51.33a16,16,0,0,0,13.2,10.87h0V400a16,16,0,0,0,16,16h56a16,16,0,0,0,16-16h0c8.61,0,14.6-1.54,20.95-3.18a158.83,158.83,0,0,1,28-4.91C207.45,389,237.79,388,256,388c17.84,0,49.52,1,80.08,3.91a159.16,159.16,0,0,1,28.11,4.93c6.08,1.56,11.85,3,19.84,3.15h0a16,16,0,0,0,16,16h56a16,16,0,0,0,16-16v-.12h0A16,16,0,0,0,485.27,389c.26-.79,6.43-19.83,9.72-51.33C496.56,322.5,496.28,299,494.26,276.22ZM112.33,189.31c8-17,17.15-36.24,33.44-44.35,23.54-11.72,72.33-17,110.23-17s86.69,5.24,110.23,17c16.29,8.11,25.4,27.36,33.44,44.35l1,2.17a8,8,0,0,1-7.44,11.42C360,202,290,199.12,256,199.12s-104,2.95-137.28,3.85a8,8,0,0,1-7.44-11.42C111.63,190.81,112,190.06,112.33,189.31Zm11.93,79.63A427.17,427.17,0,0,1,72.42,272c-10.6,0-21.53-3-23.56-12.44-1.39-6.35-1.24-9.92-.49-13.51C49,243,50,240.78,55,240c13-2,20.27.51,41.55,6.78,14.11,4.15,24.29,9.68,30.09,14.06C129.55,263,128,268.64,124.26,268.94Zm221.38,82c-13.16,1.5-39.48.95-89.34.95s-76.17.55-89.33-.95c-13.58-1.51-30.89-14.35-19.07-25.79,7.87-7.54,26.23-13.18,50.68-16.35S233.38,304,256.2,304s32.12,1,57.62,4.81,44.77,9.52,50.68,16.35C375.28,337.4,359.21,349.35,345.64,351Zm117.5-91.39c-2,9.48-13,12.44-23.56,12.44a455.91,455.91,0,0,1-52.84-3.06c-3.06-.29-4.48-5.66-1.38-8.1,5.71-4.49,16-9.91,30.09-14.06,21.28-6.27,33.55-8.78,44.09-6.69,2.57.51,3.93,3.27,4.09,5A40.64,40.64,0,0,1,463.14,259.56Z" /></svg>;
}

export default SvgComponent;