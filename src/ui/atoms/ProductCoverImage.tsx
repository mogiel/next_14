export const ProductCoverImage = ({image, alt, imageSize = {width: 320, height: 320}}: Product) => {
    return <div
        className={'aspect-square overflow-hidden rounded-md border bg-slate-950 hover:bg-slate-900 border-slate-900'}>
        <img
            className={'h-full w-full object-cover object-center p-4 transition-transform hover:scale-105'}
            width={imageSize.width}
            height={imageSize.height}
            src={image}
            alt={alt}
        />
    </div>;
};