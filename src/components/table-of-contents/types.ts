export type TableOfContentsItem = {
  url: string;
  title: string;
  items?: TableOfContentsItem[];
};

export type TableOfContentsProps = {
  items: TableOfContentsItem[];
  onClick: () => void;
};
