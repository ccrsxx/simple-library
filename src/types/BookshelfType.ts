import { NewBook } from '.';

export interface BookshelfProps {
  allBooks: NewBook[];
  setIsOpen: (isOpen: boolean) => void;
}
