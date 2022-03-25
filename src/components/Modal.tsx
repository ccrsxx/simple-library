import { ModalProps } from '../types';

export function Modal({
  title,
  author,
  year,
  isComplete,
  isOpen,
  setIsOpen,
  handleChange,
  handleSubmit
}: ModalProps) {
  return (
    <>
      <div
        className={isOpen ? 'overlay active' : 'overlay'}
        onClick={() => setIsOpen(false)}
      />
      <div className={isOpen ? 'modal active' : 'modal'}>
        <form onSubmit={handleSubmit}>
          <h2>Add new book</h2>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            onChange={handleChange()}
            value={title}
            required
          />
          <input
            type='text'
            name='author'
            id='author'
            placeholder='Author'
            onChange={handleChange()}
            value={author}
            required
          />
          <input
            min='1'
            max='3000'
            type='number'
            name='year'
            id='year'
            placeholder='Year'
            onChange={handleChange()}
            value={!year ? '' : year}
            required
          />
          <div className='checkbox-wrapper'>
            <label htmlFor='isComplete'>Have you read it?</label>
            <input
              type='checkbox'
              name='isComplete'
              id='isComplete'
              onChange={handleChange()}
              defaultChecked={isComplete}
            />
          </div>
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
