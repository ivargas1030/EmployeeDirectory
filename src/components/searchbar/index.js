import React from "react";
import "./style.css";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBar(props) {
  return (
    <div class="active-pink-3 active-pink-4 mb-4">
    <input class="form-control" type="text" placeholder="Search" aria-label="Search">
    {/* <datalist id="employees">
          {props.employees.map(employee => (
            <option value={employee} key={employee} />
          ))}
        </datalist> */}
    </input>
    </div>
  );
}

export default SearchBar;