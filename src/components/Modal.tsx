import { useContext } from 'react';
import { ModalContext } from '../common';
import {
  ModalProps,
  AddBookProps,
  RemoveBookProps,
  LoginProps
} from '../types';

function AddBook({ modalMode, handleModal }: AddBookProps) {
  const { id, title, author, year, isComplete, handleChange, handleSubmit } =
    useContext(ModalContext);

  const [greeting, onChangeMode, submitMessage] =
    modalMode === 'edit'
      ? ['Edit book', id, 'Save']
      : ['Add book', undefined, 'Submit'];

  return (
    <form onSubmit={modalMode === 'edit' ? handleModal : handleSubmit}>
      <h2>{greeting}</h2>
      <input
        type='text'
        name='title'
        id='title'
        placeholder='Title'
        onChange={handleChange(onChangeMode)}
        value={title}
        required
      />
      <input
        type='text'
        name='author'
        id='author'
        placeholder='Author'
        onChange={handleChange(onChangeMode)}
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
        onChange={handleChange(onChangeMode)}
        value={!year ? '' : year}
        required
      />
      <div className='checkbox-wrapper'>
        <label htmlFor='isComplete'>Have you read it?</label>
        <input
          type='checkbox'
          name='isComplete'
          id='isComplete'
          onChange={handleChange(onChangeMode)}
          checked={isComplete}
        />
      </div>
      <button className='btn' type='submit'>
        {submitMessage}
      </button>
    </form>
  );
}

function RemoveBook({ handleModal }: RemoveBookProps) {
  const { id, title, removeBook } = useContext(ModalContext);

  return (
    <div className='modal-content'>
      <h2>Are you sure you want to remove {title}?</h2>
      <div className='button-wrapper'>
        <button className='btn' type='button' onClick={handleModal('remove')}>
          Cancel
        </button>
        <button className='btn' type='button' onClick={removeBook(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

function Login({ handleModal }: LoginProps) {
  return (
    <div className='modal-content'>
      <h2>Coming soon...</h2>
      <button
        className='btn login'
        type='button'
        onClick={handleModal('login')}
      >
        Understood
      </button>
    </div>
  );
}

export function Modal({ isOpen, modalMode, handleModal }: ModalProps) {
  return (
    <>
      <div
        className={isOpen ? 'overlay active' : 'overlay'}
        onClick={handleModal(modalMode)}
      />
      <div className={isOpen ? 'modal active' : 'modal'}>
        {['add', 'edit'].includes(modalMode) ? (
          <AddBook modalMode={modalMode} handleModal={handleModal(modalMode)} />
        ) : modalMode === 'remove' ? (
          <RemoveBook handleModal={handleModal} />
        ) : (
          <Login handleModal={handleModal} />
        )}
      </div>
    </>
  );
}
