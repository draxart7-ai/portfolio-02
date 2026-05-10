interface EmailSvgProps {
  className?: string;
  size?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
}

export const EmailSvg = ({
  className,
  size = "32px",
  fill,
  stroke,
  strokeWidth,
}: EmailSvgProps) => {
  const height = size;
  const width = size;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    >
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
};
