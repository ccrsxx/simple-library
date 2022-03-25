const bookListMock = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    isRead: true
  },
  {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    isRead: false
  },
  {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    isRead: true
  },
  {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    isRead: true
  },
  {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    isRead: false
  },
  {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    isRead: false
  },
  {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    isRead: false
  },
  {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    isRead: true
  }
];

interface BookCardProps {
  title: string;
  author: string;
  year: number;
  isRead: boolean;
}

function BookCard({ title, author, year, isRead }: BookCardProps) {
  return (
    <div className='book-card'>
      <p>{title}</p>
      <p>{author}</p>
      <p>{year}</p>
      <div className='btn-wrapper'>
        <button
          style={{ backgroundColor: isRead ? 'lightgreen' : 'pink' }}
          className='btn card'
          type='button'
        >
          {isRead ? 'Read' : 'Not read'}
        </button>
        <button className='btn card' type='button'>
          Remove
        </button>
      </div>
    </div>
  );
}

export function Bookholder() {
  return (
    <main className='main container'>
      <button type='button' className='btn add'>
        + Add book
      </button>
      <div className='book-grid'>
        {bookListMock.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </main>
  );
}
