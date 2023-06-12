import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const InputBook = () => {
  const [data, setData] = useState({ title: '', author: '' });
  const { books } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
      item_id: `item${books.length + 1}`,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.title.trim() !== '' && data.author.trim() !== '') {
      dispatch(addBook(data));
      setData({ title: '', author: '' });
    }
  };
  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form action="submit" className="submit">
        <input
          type="text"
          className="title"
          placeholder="Book title"
          value={data.title}
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          className="author"
          placeholder="Author"
          name="author"
          value={data.author}
          onChange={handleChange}
        />
        <button type="button" className="addBook" onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </>
  );
};

export default InputBook;
