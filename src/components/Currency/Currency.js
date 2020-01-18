import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

const mapStateToProps = state => ({ ...state.currency });

class Currency extends React.Component {
  render() {
    return (
      <div>
        <h1>Курс валют</h1>
        <Table striped bordered hover size="sm">
          <thead>
          <tr>
            <th>Название</th>
            <th>Код</th>
            <th>Значение</th>
          </tr>
          </thead>
          <tbody>
          {Object.values(this.props.currencies).map((value) => {
            return (
              <tr key={value.ID}>
                <td>{value.Name}</td>
                <td>{value.CharCode}</td>
                <td>{value.Value}</td>
              </tr>
            )
          })}
          </tbody>
        </Table>
      </div>
    )
  }
}


export default connect(mapStateToProps)(Currency)
