import { useState } from 'react';
import {
  useLocalStorage,
  ModalContext,
  BookContext,
  newBookDefault
} from './common';
import { Navbar, Bookshelf, Footer, Modal } from './components';
import type { NewBook, ModalMode } from './types';

export function App() {
  const [allBooks, setAllBooks] = useLocalStorage<NewBook[]>('allBooks', []);
  const [newBook, setNewBook] = useLocalStorage<NewBook>(
    'newBook',
    newBookDefault
  );

  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>('add');
  const [selectedBook, setSelectedBook] = useState<NewBook | null>(null);

  const handleChange =
    (targetId?: number) =>
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const { name, type, checked, value } = target;
      const inputValue = type === 'checkbox' ? checked : value;

      if (targetId) {
        const newBooks = allBooks.map((book) =>
          book.id === targetId ? { ...book, [name]: inputValue } : book
        );
        setAllBooks(newBooks);
        setSelectedBook({ ...selectedBook, [name]: inputValue } as NewBook);
      } else {
        setNewBook({ ...newBook, [name]: inputValue });
      }
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAllBooks([...allBooks, { ...newBook, id: Date.now() }]);
    setNewBook(newBookDefault);
    setIsOpen(false);
  };

  const handleModal =
    (mode: ModalMode) =>
    (
      e:
        | React.FormEvent<HTMLFormElement>
        | React.MouseEvent<HTMLDivElement | HTMLButtonElement>
    ) => {
      if (e.type === 'submit') e.preventDefault();

      setIsOpen(false);

      if (mode !== 'add') {
        setTimeout(() => {
          setSelectedBook(null);
          setModalMode('add');
        }, 300);
      }
    };

  const handleLogin = () => () => {
    setIsOpen(true);
    setModalMode('login');
  };

  const editBook = (id: number) => () => {
    setModalMode('edit');
    setSelectedBook(allBooks.find((book) => book.id === id) as NewBook);
    setIsOpen(true);
  };

  const removeBook = (targetId: number) => () => {
    if (modalMode === 'remove') {
      setSelectedBook(null);
      setIsOpen(false);
      setAllBooks(allBooks.filter(({ id }) => id !== targetId));
      setTimeout(() => setModalMode('add'), 300);
    } else {
      setModalMode('remove');
      setIsOpen(true);
      setSelectedBook(allBooks.find((book) => book.id === targetId) as NewBook);
    }
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
      <Navbar handleLogin={handleLogin} />
      <ModalContext.Provider
        value={{
          ...(selectedBook || newBook),
          handleChange,
          handleSubmit,
          removeBook
        }}
      >
        <Modal
          isOpen={isOpen}
          modalMode={modalMode}
          handleModal={handleModal}
        />
      </ModalContext.Provider>
      <BookContext.Provider value={{ editBook, removeBook, toggleRead }}>
        <Bookshelf allBooks={allBooks} setIsOpen={setIsOpen} />
      </BookContext.Provider>
      <Footer />
    </div>
  );
}
