import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ itemProp }) => (
  <>
    <li>{itemProp.title}</li>
    <li>{itemProp.author}</li>
    <button type="button">Remove</button>
  </>
);

BookItem.propTypes = {
  itemProp: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default BookItem;
