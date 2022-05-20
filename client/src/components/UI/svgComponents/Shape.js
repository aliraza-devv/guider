import * as React from "react";

const SvgShape = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="shape"
    {...props}
  >
    <path
      fill="#fff"
      d="m0 224 40 16c40 16 120 48 200 37.3 80-10.3 160-64.3 240-90.6C560 160 640 160 720 160s160 0 240 10.7c80 10.3 160 32.3 240 10.6C1280 160 1360 96 1400 64l40-32v288H0Z"
    />
  </svg>
);

export default SvgShape;
