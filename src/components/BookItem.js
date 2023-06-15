import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, deleteBook } from '../redux/books/booksSlice';
import '../styles/books.css';

const BookItem = ({ itemProp }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className="book-cards">
        <div className="book-info">
          <p className="category">{itemProp.category}</p>
          <p className="book-title">{itemProp.title}</p>
          <p className="author">{itemProp.author}</p>
          <div className="btn-container">
            <button type="button">comments</button>
            <hr className="card-hr" />

            <button
              type="button"
              onClick={() => {
                dispatch(removeBook(itemProp.item_id));
                dispatch(deleteBook(itemProp.item_id));
              }}
            >
              Remove
            </button>

            <hr className="card-hr" />
            <button type="button">edit</button>
          </div>
        </div>
        <div className="progress-percent">
          <div className="rotate">
            <span className="circle"> </span>
          </div>
          <div className="test">
            <p className="percent">65%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <hr className="chapter-hr" />
        <div className="current-chapter-container">
          <p className="current-chapter">Current Chapter</p>
          <p className="chapter">Chapter 20</p>
          <button type="button" className="progress">
            Update Progress
          </button>
        </div>
      </li>
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
