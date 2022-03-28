export type Work = {
  description: string[];
  id: string;
  images: string[];
  platform: 'Mobile' | 'Desktop';
  role: string;
  tags?: string[];
  thumbnail: string;
  thumbnailContrast?: string;
  timeline: string;
  title: string;
  type: string;
  views: number;
  links?: WorkLink[];
};

export type WorkLink = {
  text: string;
  url: string;
};
