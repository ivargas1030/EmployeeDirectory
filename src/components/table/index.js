import React from "react";
import API from "../../util/API";
import "./style.css";


class Table extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <tbody>
        {this.state.results.map((employee, index) => (
          <div key={index}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
                <td>
                  <img
                    alt="Portrait"
                    src={employee.picture.thumbnail}
                    className="img-fluid"
                  />
                </td>
                <td>
                  {employee.name.first} {employee.name.last}
                </td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.date}</td>
              </tbody>
            </table>
          </div>
        ))}{" "}
      </tbody>
    );
  }
}

export default Table;
