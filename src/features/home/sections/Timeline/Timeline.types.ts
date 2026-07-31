export interface TimelineChapterItem {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface TimelineChapterProps {
  chapter: TimelineChapterItem;
}

export interface TimelineYearProps {
  year: string;
}

export interface TimelineMediaProps {
  src: string;
  alt: string;
}

export interface TimelineContentProps {
  title: string;
  description: string;
}
