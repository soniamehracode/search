import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    props.onSearch(search);
  };

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="form">
      <input
        type="text"
        value={search}
        onChange={changeSearch}
        placeholder="search for a movie"
      />

      <div onClick={onSearch} className="mybtn">
        submit
      </div>
    </div>
  );
};

export default Form;
