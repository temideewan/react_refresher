import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL302_SR302,200_.jpg",
    title: "I love you to the moon and back",
    author: "Adam Wallace",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/91WXnGm5sUL._AC_UL906_SR906,600_.jpg",
    title: "Disney Encanto Little Golden Book (Disney Encanto)",
    author: "Naibe Reynoso",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51v0gkGIaKL._AC_UL906_SR906,600_.jpg",
    title: "Harry Potter Paperback Box Set (Books 1-7)",
    author: "J.K. Rowling",
  },
];

const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="catch a leprechaun" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
