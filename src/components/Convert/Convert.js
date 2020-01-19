import React from 'react';
import { Button, Col, Form, Jumbotron } from 'react-bootstrap';
import { connect } from "react-redux";

const mapStateToProps = state => ({ currencies: state.currency.currencies });

class Convert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      response: '',
    }
  }

  submit(e) {
    e.preventDefault();
    const regex = /(?<number>\d+) (?<from>[a-z]{3}) in (?<to>[a-z]{3})/gm;
    const groups = regex.exec(this.state.value);
    if (groups) {
      const { groups: { number, from, to } } = groups;
      const currencyFrom = this.props.currencies[from.toUpperCase()];
      const currencyTo = this.props.currencies[to.toUpperCase()];
      const responseValue = parseFloat(((currencyFrom.Value / currencyTo.Value) * number).toFixed(4));
      const response = `${number} ${currencyFrom.Name} = ${responseValue} ${currencyTo.Name}`;
      this.setState({ response });
    }
  }

  render() {
    return (
      <div>
        <h1>Convert</h1>
        <Form onSubmit={this.submit.bind(this)}>
          <Form.Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="10 usd in rub"
                value={this.state.value}
                onInput={(e) => this.setState({ value: e.target.value })}
                onChange={(e) => this.setState({ value: e.target.value })}
              />
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Конвертировать
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <Jumbotron className="mt-3">
          <p>{this.state.response}</p>
        </Jumbotron>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Convert);
