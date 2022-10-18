import React, { useEffect, useState } from "react";
import axios from "axios";

const BookDetail = ({ bookId }) => {
    const [data, setData] = useState();
  
    const fetchCardDetail = async (data) => {
      try {
        const res = await axios.post('/detail', data);
        setData(res.data.datas);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchCardDetail({ bookId });
    }, []);
  
    if (!data) {
      return null;
    }
    return <>"여기에 data 변수의 값들로 세부 화면 구성하기!"</>;
  };
  

export default BookDetail;