export interface YouTubeLink {
  id: string;
  url: string;
  title: string;
  category: string;
  createdAt: Date;
  addedBy: string;
}

export type YouTubeLinkCategory = 
  | 'Contemporary Worship'
  | 'Praise & Worship'
  | 'Gospel Worship'
  | 'Instrumental Worship'
  | 'Hymns & Favorites'
  | 'Christmas Worship'; 