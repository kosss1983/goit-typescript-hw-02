type Urls = {
  small: string;
  regular: string;
};

export interface ImageCardProps {
  last: boolean;
  onClickImage: (url: string) => void;
  urls: Urls;
  description: string;
}
