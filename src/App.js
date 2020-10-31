import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BlockView } from './Components/BlockView';
import { AccountName } from './Components/AccountName';
import {
	createBlock,
	transaction
} from './store/actionCreators';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }
	
		transaction = (info) => {
			this.props.transaction(info);
			this.setState({});
		}
		
		addBlock = () => {
			const timeNow = new Date();
			const Cryptr = require('cryptr');
			const cryptr = new Cryptr('myTotalySecretKey');
			const encryptedString = cryptr.encrypt(`${timeNow}` + `${timeNow}` + `${timeNow}`);
			this.props.createBlock(encryptedString);	
		}

  render() {
    const { blocks } = this.props;
    return (
      <div>
				<div className="account-button" onClick={() => this.addBlock()}>Give me an account!</div>
				<div className="block">
  				<table className="center-table">
   		 			<tbody>
      				<tr>
        				<td>
          				{blocks.map(block => (
										<BlockView
											timestamp={block.timestamp}
											balance={block.balance}
											key={block.timestamp}
											accountName={block.addressFrom}
											transaction={(info) => this.transaction(info)}
											>
											<div>
												<AccountName 
													accountName={block.addressFrom}
													/>
												<p>Account opened {block.timestamp}</p>
												<p>Current Balance ${block.balance}</p>
											</div>
										</BlockView>
									))}
                </td>
              </tr>
            </tbody>
          </table>
				</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
		blocks: state.blocks,
		previousHash: state.previousHash
  };
};

export default connect(mapStateToProps, {
	createBlock,
	transaction
})(App);
