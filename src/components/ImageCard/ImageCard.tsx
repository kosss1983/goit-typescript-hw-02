import s from './ImageCard.module.css';
import React, { useRef, useEffect } from 'react';
import { ImageCardProps } from './ImageCard.types';

const ImageCard: React.FC<ImageCardProps> = ({
  last,
  onClickImage,
  urls: { small, regular },
  description,
}) => {
  const ref = useRef<null | HTMLImageElement>(null);

  useEffect(() => {
    if (last) {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [last]);

  return (
    <img
      ref={ref}
      loading="lazy"
      onClick={() => onClickImage(regular)}
      className={s.galleryImage}
      src={small}
      alt={description}
    />
  );
};

export default ImageCard;
