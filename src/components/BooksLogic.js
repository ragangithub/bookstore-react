import React from 'react';

import InputBook from './InputBook';
import BooksList from './BooksList';

const BooksLogic = () => {
  const books = [
    {
      id: 1,
      title: 'Harry Potter and the Deathly Hallows',
      author: 'JK Rowling',
    },
    {
      id: 2,
      title: 'The DaVinci Code',
      author: 'Dan Brown',
    },
    {
      id: 3,
      title: 'Beloved',
      author: 'Toni Morrison',
    },
  ];

  return (
    <>
      <InputBook />
      <BooksList key={books.id} bookProps={books} />
    </>
  );
};

export default BooksLogic;
