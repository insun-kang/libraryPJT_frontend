import React, { useEffect, useState } from "react";
import axios from "axios";

import BookTable from "../../components/Table/BookTable";
import BookTableRow from "../../components/Table/BookTableRow";
import BookTableColumn from "../../components/Table/BookTableColumn";

function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("/api/v1/books").then((response) => {
      setData(response.data);
    });
  }, []);

  // response.data 의 데이터는 array 형식[{...}, {...}, ...] 이기 때문에
  // data 에 바로 map 함수를 이용하면 에러가 발생한다.
  // Object.values(data) 을 사용해 배열을 리턴받아 사용

  const item = Object.values(data).map((item) => (
    <BookTableRow key={item.id}>
      <BookTableColumn>{item.id}</BookTableColumn>
      <BookTableColumn>{item.title}</BookTableColumn>
      <BookTableColumn><img src = {item.image}/>{item.image}</BookTableColumn>
      <BookTableColumn>{item.author}</BookTableColumn>
    </BookTableRow>
  ));

  return item;
}
function Book() {
  const item = GetData();

  return (<>
    <BookTable headersName={['글번호', '제목', '등록일', '작성자']}>
      {item}
    </BookTable>
  </>);
}
  
export default Book;
