import React from 'react';

import { useSelector } from 'react-redux';
import InputBook from './InputBook';
import BooksList from './BooksList';

const BooksLogic = () => {
  const { books } = useSelector((store) => store.books);

  return (
    <>
      <InputBook />
      <BooksList bookProps={books} />
    </>
  );
};

export default BooksLogic;
