import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, deleteBook } from '../redux/books/booksSlice';

const BookItem = ({ itemProp }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li>{itemProp.title}</li>
      <li>{itemProp.author}</li>

      <button
        type="button"
        onClick={() => {
          dispatch(removeBook(itemProp.item_id));
          dispatch(deleteBook(itemProp.item_id));
        }}
      >
        Remove
      </button>
    </>
  );
};

BookItem.propTypes = {
  itemProp: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string,
  }).isRequired,
};

export default BookItem;
