import { useContext, useRef } from 'react';
import { BookContext } from '../common';
import type { BookshelfProps, BookCardProps } from '../types';

function BookCard({ id, title, author, year, isComplete }: BookCardProps) {
  const { handleChange, removeBook, toggleRead } = useContext(BookContext);
  const defaultValue = useRef([title, author, year]);

  const [newTitle, newAuthor, newYear] = defaultValue.current as string[];
  return (
    <div className='book-card'>
      <p
        id='title'
        onInput={handleChange(id)}
        contentEditable
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: newTitle }}
      />
      <p
        id='author'
        onInput={handleChange(id)}
        contentEditable
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: newAuthor }}
      />
      <p
        id='year'
        onInput={handleChange(id)}
        contentEditable
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: newYear }}
      />
      <div className='btn-wrapper'>
        <button
          style={{ backgroundColor: isComplete ? 'lightgreen' : 'pink' }}
          className='btn card'
          type='button'
          onClick={toggleRead(id)}
        >
          {isComplete ? 'Completed' : 'Not read yet'}
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
