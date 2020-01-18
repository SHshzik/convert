import React from 'react';
import { connect } from 'react-redux';
import { Form, Table } from 'react-bootstrap';

import { changeCurrentCurrency } from '../../actions/currency_actions';

const mapStateToProps = state => ({ ...state.currency });
const mapDispatchToProps = dispatch => ({
  changeCurrentCurrency: (newValue) => dispatch(changeCurrentCurrency(newValue))
});

class Currency extends React.Component {
  currency() {
    return this.props.currencies[this.props.currentCurrency];
  }

  value(value) {
    return parseFloat((value / this.currency().Value).toFixed(4));
  }

  render() {
    return (
      <div>
        <h1>Курс валют</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              Ваша валюта
              <select
                defaultValue={this.props.currentCurrency}
                className="form-control"
                onChange={(e) => this.props.changeCurrentCurrency(e.target.value)}
              >
                {Object.values(this.props.currencies).map((value) => {
                  return (
                    <option value={value.CharCode} key={value.ID}>{value.Name}</option>
                  )
                })}
              </select>
            </Form.Label>
          </Form.Group>
        </Form>
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
                <td>{this.value(value.Value)}</td>
              </tr>
            )
          })}
          </tbody>
        </Table>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Currency)
