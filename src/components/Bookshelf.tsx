import { useContext } from 'react';
import { BookContext } from '../common';
import type { BookshelfProps, NewBook } from '../types';

function BookCard({ id, title, author, year, isComplete }: NewBook) {
  const { editBook, removeBook, toggleRead } = useContext(BookContext);

  return (
    <div className='book-card'>
      <p>{title}</p>
      <p>{author}</p>
      <p>{year}</p>
      <div className='btn-wrapper'>
        <button
          style={{ backgroundColor: isComplete ? 'lightgreen' : 'pink' }}
          className='btn card'
          type='button'
          onClick={toggleRead(id)}
        >
          {isComplete ? 'Completed' : 'Not read yet'}
        </button>
        <button className='btn card' type='button' onClick={editBook(id)}>
          Edit
        </button>
        <button className='btn card' type='button' onClick={removeBook(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export function Bookshelf({ allBooks, setIsOpen }: BookshelfProps) {
  return (
    <main className='main container'>
      <button type='button' className='btn add' onClick={() => setIsOpen(true)}>
        + Add book
      </button>
      <div className='book-grid'>
        {allBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </main>
  );
}
