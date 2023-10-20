import React from "react";

const Products = ({ name, imagePath, updateItemCount }) => {
  const handleChange = (event) => {
    const currentValue = event.target.value;
    updateItemCount(name, currentValue);
  };
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "75%", height: "75%" }}
        src={`http://localhost:4000${imagePath}`}
        alt={`${name} product`}
      />
      <from style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "center" }}>{name}</label>
        <input
          style={{ marginLeft: "7px" }}
          type="number"
          name="quantitiy"
          min="0"
          defaultValue={0}
          onChange={handleChange}
        />
      </from>
    </div>
  );
};

export default Products;
