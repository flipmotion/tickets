import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './form.module.scss';

class Results extends PureComponent {
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
    this.props.history.push('/search');
  }

  render() {
    const {
      from,
      to,
      date,
    } = this.state;


    return (
      <Fragment>
        <div>
          <label htmlFor="from">From</label>
          <input
            className={styles['form-control']}
            id="from"
            onChange={this.onChange('from')}
            value={from}
           />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input
            className={styles['form-control']}
            id="to"
            onChange={this.onChange('to')}
            value={to}
           />
        </div>
        <div>
          <label htmlFor="date">To</label>
          <input
            className={styles['form-control']}
            id="date"
            type="date"
            onChange={this.onChange('date')}
            value={date}
           />
        </div>
        <div>
          <button onClick={this.onSubmit} type="button">search</button>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Results);

