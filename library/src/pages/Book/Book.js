import React, { useEffect, useState } from "react";
import axios from "axios";

import CardItem from "../../components/Card/CardItem";

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
    <CardItem
      key={item.bookId}
      src={item.image}
      text={item.content}
      label={item.content}
      path={item.content}
    />
  ));

  return item;
}

function Book() {
  const item = GetData();
  return { item };
}

export default Book;
