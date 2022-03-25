import { useLocalStorage, BookContext, newBookDefault } from './common';
import { Navbar, Bookshelf, Footer, Modal } from './components';
import type { NewBook } from './types';

export function App() {
  const [allBooks, setAllBooks] = useLocalStorage<NewBook[]>('allBooks', []);
  const [newBook, setNewBook] = useLocalStorage<NewBook>(
    'newBook',
    newBookDefault
  );
  const [isOpen, setIsOpen] = useLocalStorage('isOpen', false);

  const handleChange =
    (targetId: null | number = null) =>
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      if (targetId !== null) {
        const { id, textContent } = target;
        const newBooks = allBooks.map((book) =>
          book.id === targetId ? { ...book, [id]: textContent } : book
        );
        setAllBooks(newBooks);
      } else {
        const { name, type, checked, value } = target;
        const inputValue = type === 'checkbox' ? checked : value;
        setNewBook({ ...newBook, [name]: inputValue });
      }
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAllBooks([...allBooks, { ...newBook, id: allBooks.length }]);
    setNewBook(newBookDefault);
    setIsOpen(false);
  };

  const removeBook = (targetId: number) => () => {
    setAllBooks(allBooks.filter(({ id }) => id !== targetId));
  };

  const toggleRead = (targetId: number) => () => {
    setAllBooks(
      allBooks.map((book) =>
        book.id === targetId ? { ...book, isComplete: !book.isComplete } : book
      )
    );
  };

  return (
    <div className='App'>
      <Navbar />
      <Modal
        {...newBook}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <BookContext.Provider value={{ handleChange, removeBook, toggleRead }}>
        <Bookshelf allBooks={allBooks} setIsOpen={setIsOpen} />
      </BookContext.Provider>
      <Footer />
    </div>
  );
}
