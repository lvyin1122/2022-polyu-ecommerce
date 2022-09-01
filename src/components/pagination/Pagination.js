import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationBasic = (props) => {
  let items = [];
  for (let number = 1; number <= props.numPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === props.active}
        onClick={() => props.setActive(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination size="lg">
        <Pagination.First onClick={() => props.setActive(1)}/>
        <Pagination.Prev disabled={props.active===1} onClick={() => props.setActive(props.active-1)}/>
        {items}
        <Pagination.Next disabled={props.active===props.numPages} onClick={() => props.setActive(props.active >= props.numPages ? props.numPages : props.active+1)}/>
        <Pagination.Last onClick={() => props.setActive(props.numPages)}/>
      </Pagination>
    </div>
  );
};

export default PaginationBasic;
