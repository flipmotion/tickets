import React, { Component, PureComponent, Fragment } from 'react';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from '@smooth-ui/core-sc';

class SearchForm extends PureComponent {
  state = {
    from: '',
    to: '',
    date: '',
  }

  onChange = name => ({ target }) =>
    this.setState({
      [name]: target.value,
    })

  onSubmit = event => {
    //
  }

  render() {
    const {
      from,
      to,
      date,
    } = this.state;


    return (
      <Fragment>
        <FormGroup>
          <Label htmlFor="from">From</Label>
          <Input
            id="from"
            onChange={this.onChange('from')}
            value={from}
           />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="to">To</Label>
          <Input
            id="to"
            onChange={this.onChange('to')}
            value={to}
           />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">To</Label>
          <Input
            id="date"
            type="date"
            onChange={this.onChange('date')}
            value={date}
           />
        </FormGroup>
        <FormGroup>
          <Button onClick={this.onSubmit}>search</Button>
        </FormGroup>
      </Fragment>
    )
  }
}

const SearchResults = () => {
  return (
    <div>Search Results</div>
  )
}

export default class extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <SearchForm />
            <SearchResults />
          </Col>
        </Row>
      </Grid>
    );
  }
}

