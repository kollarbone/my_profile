import * as React from "react";

const Develop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <path
      d="M15 23.75 21.25 30 15 36.25m-8.75-20h37.5M10 45a5 5 0 0 1-5-5V10a5 5 0 0 1 5-5h30a5 5 0 0 1 5 5v30a5 5 0 0 1-5 5H10Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Develop;
