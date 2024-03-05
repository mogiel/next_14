export type ProductCoverImageProps = {}

export const ProductCoverImage = ({ image, alt, imageSize = { width: 320, height: 320 } }: ProductCoverImageProps) => {
  return <div className={'aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100'}>
    <img
      className={'h-full w-full object-cover object-center p-4 transition-transform hover:scale-105'}
      width={imageSize.width}
      height={imageSize.height}
      src={image}
      alt={alt}
    />
  </div>;
};