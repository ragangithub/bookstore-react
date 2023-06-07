import React from 'react';

import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BooksList = ({ bookProps }) => (
  <ul className="displayBooks">
    {bookProps.map((book) => (
      <BookItem key={book.id} itemProp={book} />
    ))}
  </ul>
);

BooksList.propTypes = {
  bookProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BooksList;
