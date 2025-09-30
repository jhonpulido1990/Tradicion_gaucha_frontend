export type MediaType = 'image' | 'video';

export interface MediaSource {
  type: MediaType;
  src: string;
  alt?: string;
  poster?: string;
}
