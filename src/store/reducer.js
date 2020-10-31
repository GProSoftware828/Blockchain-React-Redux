import _ from 'lodash';
import * as actionTypes from './actions';

export const initialState = {
	blocks: [{
			previousHash: 'adfjandfjklandfkjnaliugnadnjkan',
			timestamp: 'Fri Oct 30 2020 20:30:02 GMT+1100 (AEDT)',
			addressFrom: 1,
		  balance: 100,
			hash: 'iuawebnfjbdabfkjnaenfalebaksjdjaksd'
		}]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
		case actionTypes.CREATE_TRANSACTION:
			console.log('blocks changed: ', state.blocks);
			const blockFind = state.blocks;
			
				blockFind.forEach(function(obj, index) {
					
					
					if (obj.addressFrom === action.transaction.addressFrom) {
						if (index === 0) {
							console.log('Index caught at 0.');
							if (obj.previousHash !== state.blocks[0].previousHash) {
								console.log('Chain is invalid for the first account sending.');
								return action.transaction.amount = 0;
							} else {
								console.log('Chain is valid for the first account sending.')
							}
						}
						if (index !== 0) {
							console.log('Index caught at above 0.');
							const prevIndex = index - 1;
							console.log('prevIndex: ', prevIndex);
							const previousHashHere = state.blocks[prevIndex];
							console.log('previousHash block: ', previousHashHere);
							console.log('obj.previousHash: ', obj.previousHash);
							console.log('hash of previous: ', previousHashHere.hash);
								if (obj.previousHash !== previousHashHere.hash) {
									console.log('Chain for the sending account is invalid.');
									return action.transaction.amount = 0;
								} else {
									console.log('Chain is valid for the sending account.');
								}
						}
						const newBalance = obj.balance - action.transaction.amount;
						console.log('newBalance:', newBalance);
						obj.balance = newBalance;
						console.log('Sending account with a new balance: ', obj);
					}
					
					
					
					if (obj.addressFrom === action.transaction.addressTo) {
						if (index === 0) {
							console.log('Index caught at 0.');
							if (obj.previousHash !== state.blocks[0].previousHash) {
								console.log('Chain is invalid for the first account receiving.');
								return action.transaction.amount = 0;
							} else {
								console.log('Chain is valid for the first account receiving.')
							}
						}
						if (index !== 0) {
							console.log('Index caught at above 0.');
							const prevIndex = index - 1;
							console.log('prevIndex: ', prevIndex);
							const previousHashHere = state.blocks[prevIndex];
							console.log('previousHash block: ', previousHashHere);
							console.log('obj.previousHash: ', obj.previousHash);
							console.log('hash of previous: ', previousHashHere.hash);
								if (obj.previousHash !== previousHashHere.hash) {
									console.log('Chain for the receiving account is invalid.');
									return action.transaction.amount = 0;
								} else {
									console.log('Chain is valid for the receiving account.');
								}
						}
						const newBalance = obj.balance + action.transaction.amount;
						console.log('newBalance:', newBalance);
						obj.balance = newBalance;
						console.log('Receiving account with a new balance: ', obj);
					}
					
					
				})
				
			return {
				...state,
				blocks: state.blocks
			};
		
  	case actionTypes.CREATE_BLOCK:
			
			const hash = _.last(state.blocks).hash;
			const addressFrom = _.last(state.blocks).addressFrom + 1;
			const date = JSON.stringify(new Date());
			
			var newBlock = {
				previousHash: hash,
				timestamp: date,
				addressFrom: addressFrom,
				balance: 100,
				hash: action.hash
			}
			
			console.log('newBlock: ', newBlock)
    	return {
     	  ...state,
        blocks: _.concat(state.blocks, newBlock),
   		};
		
		default:
      return state;
  }
};

export default reducer;