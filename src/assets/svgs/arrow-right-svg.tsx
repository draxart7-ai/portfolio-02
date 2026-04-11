interface ArrowRightSvgProps {
  className?: string;
  size?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
}

export const ArrowRightSvg = ({
  className,
  size = "32px",
  fill,
  stroke,
  strokeWidth,
}: ArrowRightSvgProps) => {
  const height = size;
  const width = size;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      transform="translate(2, 0)"
    >
      <g id="Arrow">
        <path
          id="path_3_"
          d="M40.9 3.8L101.1 64l-60.2 60.2-14-14L73 64 26.9 17.9l14-14.1z"
        />
      </g>
    </svg>
  );
};
