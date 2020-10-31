import * as actionTypes from './actions';


export const createBlock = (hash) => {
	console.log('Hash in AC: ', hash);
  return {
    type: actionTypes.CREATE_BLOCK,
		hash: hash
  };
};

export const transaction = newTransaction => {
	console.log('transaction obj in AC: ', newTransaction);
	console.log('obj: ', newTransaction.addressFrom);
  return {
    type: actionTypes.CREATE_TRANSACTION,
		transaction: newTransaction
  };
};