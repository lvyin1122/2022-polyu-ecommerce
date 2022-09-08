import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationBasic = (props) => {
  let items = [];
  for (let number = 1; number <= props.numPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === props.active}
        onClick={() => props.setPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination size="lg">
        {items}
      </Pagination>
    </div>
  );
};

export default PaginationBasic;
