import React from "react";
import "./BookCard.css";

function CardItem(props) {
  return (
    <div className="container">
      <div className="row">
        {props.shoes.map((item, index) => {
          return (
            <div className="col-md-4" key={index}>
              <img src={item.image} width="80%" />
              <h4>{item.title}</h4>
              <p>{item.author}</p>
              <p>{item.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CardItem;