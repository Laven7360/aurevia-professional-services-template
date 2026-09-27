export default function EditorialPhoto({ src, alt, width, height, caption, className = '', priority = false }) {
  return (
    <figure className={`editorial-photo ${className}`}>
      <div className="editorial-photo__frame">
        <img className="editorial-photo__image" src={src} alt={alt} width={width} height={height}
          loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
      </div>
      <figcaption className="editorial-photo__caption"><span>{caption}</span><small>Illustrative photography</small></figcaption>
    </figure>
  )
}
