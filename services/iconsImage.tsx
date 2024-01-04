import Image from "next/image";

interface IconsImageProps {
  width: number;
  height: number;
  className: string;
  src: any;
  alt: string;
}

export function IconsImage({
  height = 50,
  width = 50,
  src,
  className,
  alt,
}: IconsImageProps) {
  return (
    <Image
      width={width}
      height={height}
      className={className}
      src={src}
      alt={alt}
    />
  );
}
