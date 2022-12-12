type PropertyGalleryProps = {
  gallery: string[]
}
export function PropertyGallery({gallery}: PropertyGalleryProps) {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {gallery.slice(0, 6).map(item =>
          <div className="property__image-wrapper">
            <img className="property__image" src={item} alt="Studio" />
          </div>
        )}
      </div>
    </div>
  );
}
