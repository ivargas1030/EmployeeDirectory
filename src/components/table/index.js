import React from "react";
import API from "../../util/API"

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
    return (<div>
      {this.state.results.map((employee, index) => (
        <div key = {index}>
          {employee.name.first}
          {employee.name.last}
          {employee.location.street.number}
          {employee.location.street.name}
          {employee.location.city}
        </div>
      ))}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Todd</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
}

export default Table;
