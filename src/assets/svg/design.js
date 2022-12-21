import * as React from "react";

const Design = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <path
      d="M25 12.5v.07M12.57 25h-.07m21.34-8.838-.05.049M16.21 33.79l-.048.048m.049-17.63-.05-.048M25 45C13.954 45 5 36.046 5 25S13.954 5 25 5s20 8.954 20 20c0 3.363-3.107 5.6-6.47 5.6h-1.305a4.34 4.34 0 0 0-3.883 6.283 4.34 4.34 0 0 1 .458 1.942v.394c0 2.293-1.287 4.464-3.498 5.07-1.689.464-3.466.711-5.302.711Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Design;
