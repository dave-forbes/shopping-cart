import PropTypes from "prop-types";

const Subtract = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#000000"
          strokeWidth="1.5"
        ></circle>{" "}
        <path
          d="M15 12H9"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

Subtract.propTypes = {
  onClick: PropTypes.func,
};

export default Subtract;
