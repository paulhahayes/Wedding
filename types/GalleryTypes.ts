export interface ImageProps {
  id: number;
  height: number;
  width: number;
  public_id: string;
  format: string;
  blurDataUrl?: string;
  lastViewedPhoto?: string | null;
  key?: string;
  tags?: string[];
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  direction?: number;
}
