import * as React from "react";

const Youtube = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 70 70"
    fill="none"
    {...props}
  >
    <path
      d="M54.47 25.372a5.011 5.011 0 0 0-3.53-3.538C47.83 21 35.35 21 35.35 21s-12.472 0-15.589.834a5.011 5.011 0 0 0-3.529 3.538C15.401 28.49 15.401 35 15.401 35s0 6.51.831 9.628a5.011 5.011 0 0 0 3.53 3.538C22.877 49 35.35 49 35.35 49s12.479 0 15.589-.834a5.011 5.011 0 0 0 3.53-3.538C55.3 41.51 55.3 35 55.3 35s0-6.51-.83-9.628Z"
      fill={props.fill}
    />
    <path
      d="m31.364 41.001 10.366-6-10.365-6.002v12.002Z"
      fill={props.subfill}
    />
  </svg>
);

export default Youtube;
