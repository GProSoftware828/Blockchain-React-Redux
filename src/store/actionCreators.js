import * as actionTypes from './actions';


export const createBlock = (hash) => {
  return {
    type: actionTypes.CREATE_BLOCK,
		hash: hash
  };
};

export const transaction = newTransaction => {
  return {
    type: actionTypes.CREATE_TRANSACTION,
		transaction: newTransaction
  };
};