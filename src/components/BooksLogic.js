import React from 'react';

import { useSelector } from 'react-redux';

import InputBook from './InputBook';
import BooksList from './BooksList';

const BooksLogic = () => {
  const { books, isLoading, error } = useSelector((store) => store.books);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return <div className="error">{error.message}</div>;
  }
  return (
    <>
      <InputBook />
      <BooksList bookProps={books} />
    </>
  );
};

export default BooksLogic;
