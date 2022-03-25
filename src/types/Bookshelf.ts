import { NewBook } from '.';

interface BookshelfProps {
  allBooks: NewBook[];
  setIsOpen: (isOpen: boolean) => void;
}

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  year: number;
  isComplete: boolean;
}

export type { BookshelfProps, BookCardProps };
