import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AccountName extends Component {
  render() {
    return (
      <div
				className="accountName"
				onClick={this.props.click} //add a checked box and add selection to other list
        data-test="AccountNameComponent"
      >
				{this.props.accountName}
      </div>
    );
  }
}

AccountName.propTypes = {
  accountName: PropTypes.number
};

export default AccountName;
