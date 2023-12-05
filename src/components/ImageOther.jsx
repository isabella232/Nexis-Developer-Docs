import Image from 'next/image'

export function ImageOther({ img, width, height }) {
  return <Image src={img} width={width} height={height} alt="image" />
}
