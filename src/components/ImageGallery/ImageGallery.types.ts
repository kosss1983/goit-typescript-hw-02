import { Image } from '../App/App.types';

export interface ImageGalleryProps {
  images: Image[];
  onClickImage: (url: string) => void;
}
