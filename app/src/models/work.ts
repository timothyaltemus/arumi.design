export type Work = {
  description: string[];
  id: string;
  image: string;
  platform: 'Mobile' | 'Desktop';
  role: string;
  tags?: string[];
  thumbnail: string;
  thumbnailContrast?: string;
  timeline: string;
  title: string;
  type: string;
  views: number;
};
