interface ArrowLeftSvgProps {
  className?: string;
  size?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
}

export const ArrowLeftSvg = ({
  className,
  size = "32px",
  fill,
  stroke,
  strokeWidth,
}: ArrowLeftSvgProps) => {
  const height = size;
  const width = size;
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      transform="rotate(180)"
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
