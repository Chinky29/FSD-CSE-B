const books = [
  { imageSrc: "https://tse1.mm.bing.net/th/id/OIP.o3IcD_tzwhBxUIblbNSDygHaGI?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3", price: "150/-" },
  { imageSrc: "https://s3-eu-west-1.amazonaws.com/cover2.galileo-press.de/print/9781493224401_800.png", price: "200/-" },
  { imageSrc: "https://m.media-amazon.com/images/I/71tsW0PC3NL._SL1500_.jpg", price: "250/-" }
];

const bookCards = books.map(book =>
  React.createElement(
    "div",
    { className: "card" },
    React.createElement("img", {
      src: book.imageSrc,
      width: "150",
      height: "150",
      alt: "Book Image"
    }),
    React.createElement("h4", null, "Price: " + book.price)
  )
);


const container = React.createElement("div", null, bookCards);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);