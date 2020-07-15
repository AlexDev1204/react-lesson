import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { CircularProgress } from "@material-ui/core";

export default class TableComponent extends Component {
  state = {
    data: null,
    loading: true,
    obj: {
      name: "2313",
      value: "",
    },
  };

  onHandleStop = () => {
    this.setState({ loading: !this.state.loading });
    this.setState({
      obj: {
        ...this.state.obj,
        name: "wwwww",
      },
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      });
  }

  renderTable = () =>
    this.state.data.map(({ body, id, title, userId }) => (
      <tr key={title}>
        <td>{id}</td>
        <td>{userId}</td>
        <td>{title}</td>
        <td>{body}</td>
      </tr>
    ));

  render() {
    if (!this.state.data) {
      return (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      );
    } else {
      return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.renderTable()}</TableBody>
          </Table>
        </TableContainer>
      );
    }
  }
}
