import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Size = ({ match }) => {
  const [sizeItem, setSizeItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/inventory/products/" + match.params.sizeId)
      .then((data) => data.json())
      .then((data) => {
        setSizeItem(data.inventory);
        console.log(data);
      });
  }, []);

  return (
    <div>
      
      <ul style={{ listStyleType: "none" }}>
        <h4>{sizeItem.size1}: ${sizeItem.price1}.20 </h4>
        <h4>{sizeItem.size2}: ${sizeItem.price2}.00</h4>
        <br />
        {/* <Link to={`${match.url}/${sizeItem.id}`}>Buy Some River Water Now!</Link> */}
        <a href="http://localhost:3000/cart"><button type="button" className="btn btn-success">Buy Some River Water Now!</button></a>
        <br />
      </ul>
    </div>
  );
};

export default Size;
