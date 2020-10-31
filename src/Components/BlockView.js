import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
	transaction
} from '../store/actionCreators';

export class BlockView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addressFrom: 0,
			addressTo: 2,
			amount: 0
		}
		this.handleAccountChange = this.handleAccountChange.bind(this);
		this.handleAmountChange = this.handleAmountChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentDidMount() {
		this.setState({addressFrom: this.props.accountName})
	}
	
	handleAccountChange(e) {
		const input = parseInt(e.target.value) ? parseInt(e.target.value) : '';
		this.setState({ addressTo: input});
	}
	
	handleAmountChange(e) {
		const input = parseInt(e.target.value) ? parseInt(e.target.value) : '';
		this.setState({ amount: input});
	}
	
	handleSubmit(e) {
		e.preventDefault();
		this.props.transaction(this.state);
	}
	
  render() {
    return (
      <div
        data-test="BlockViewComponent"
      >
				{this.props.children}
				<hr/>
				<p>Make a transaction</p>
				<form onSubmit={this.handleSubmit}>
					<label>
						Account to Send Money
						<input value={this.state.addressTo} onChange={this.handleAccountChange}/>
					</label>
					<label>
						Amount to Send
						<input value={this.state.amount} onChange={this.handleAmountChange}/>
					</label>
					<button type="submit">Submit</button>
      	</form>
				<hr/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
		blocks: state.blocks
  };
};

BlockView.propTypes = {
  balance: PropTypes.number
};

export default connect(mapStateToProps, {
	transaction
})(BlockView);
