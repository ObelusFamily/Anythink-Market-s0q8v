import React, { useEffect, useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent.js";

const Banner = ({ onTextFilter }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filterPromise = agent.Items.byText;
    if (searchText.length > 2) {
      agent.Items.byText(searchText).then((res) => {
        onTextFilter(filterPromise, res);
      });
    } else {
      agent.Items.byText().then((res) => {
        onTextFilter(filterPromise, res);
      });
    }
  }, [searchText, onTextFilter]);

  function handleChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="row align-items-center">
          <span className="col-4 text-right" id="get-part">
            A place to get
          </span>
          <div className="input-group col-4">
            <input
              type="text"
              className="form-control border-right-0"
              id="search-box"
              placeholder="What is it that you truly desire?"
              value={searchText}
              onChange={handleChange}
            />
            <span className="input-group-append bg-white rounded">
              <span className="input-group-text bg-transparent">
                <i class="bi bi-search" style={{ color: "purple" }}></i>
              </span>
            </span>
          </div>
          <span className="col-4 text-left"> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
