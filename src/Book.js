import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  const handleClick = (e) => {
    console.log(e);
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      onMouseOver={() => {
        console.log(title);
      }}
      className="book"
    >
      <img src={img} alt="catch a leprechaun" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={handleClick}>
        {" "}
        Click me
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        {" "}
        Complex example
      </button>
    </article>
  );
};

export default Book;
