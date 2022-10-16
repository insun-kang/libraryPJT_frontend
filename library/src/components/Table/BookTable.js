import React from "react";
import "./BookTable.css";

const BookTable = (props) => {
  const { headersName, children } = props;

  return (
    <table className="book-table">
      <thead>
        <tr>
          {headersName.map((item, index) => {
            return (
              <td className="book-table-header-column" key={index}>
                {item}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default BookTable;
