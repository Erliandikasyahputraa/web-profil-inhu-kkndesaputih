export interface StoryParagraph {
  id: string;
  text: string;
}

export interface StoryContentProps {
  title: string;
  lead: string;
  paragraphs: readonly StoryParagraph[];
}

export interface StoryImageProps {
  imageSrc: string;
  imageAlt: string;
  caption?: string;
}

export interface StoryMetaProps {
  label: string;
  value: string;
}
