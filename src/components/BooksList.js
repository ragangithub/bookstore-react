import React from 'react';

import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BooksList = ({ bookProps }) => (
  <ul className="displayBooks">
    {bookProps.map((book) => (
      <BookItem key={book.item_id} itemProp={book} />
    ))}
  </ul>
);

BooksList.propTypes = {
  bookProps: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string,
    }),
  ).isRequired,
};

export default BooksList;
