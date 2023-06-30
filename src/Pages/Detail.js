import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function DetailPage(props) {
  useEffect(() => {
    isNaN(inputValue) ? setAlert(true) : setAlert(false);
  }, [
    <input
      type="text"
      onChange={(event) => setInputValue(event.target.value)}
    ></input>,
  ]);

  let { id } = useParams();
  let detailBurger = props.burger.filter((item) => item.id == id);
  let [inputValue, setInputValue] = useState("");
  let [alert, setAlert] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`/img/${id}.png`} width="100%" />
        </div>
        {alert && <p>경고! 숫자만 입력하세요</p>}

        <input onChange={(event) => setInputValue(event.target.value)}></input>

        <div className="col-md-6">
          <h4 className="pt-5">{detailBurger[0].title}</h4>
          <p>{detailBurger[0].content}</p>
          <p>{detailBurger[0].price}</p>

          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
