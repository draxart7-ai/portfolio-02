interface LeaveSvgProps {
  className?: string;
  size?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
}

export const LeaveSvg = ({
  className,
  size = "32px",
  fill,
  stroke,
  strokeWidth,
}: LeaveSvgProps) => {
  const height = size;
  const width = size;
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6666 8L17.75 10.5L15.6666 8Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6666 13L17.75 10.5L15.6666 13Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 10.5L10 10.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="4"
        y1="3.5"
        x2="13"
        y2="3.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="4"
        y1="17.5"
        x2="13"
        y2="17.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 3.5V7.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 13.5V17.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 3.5L4 17.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
