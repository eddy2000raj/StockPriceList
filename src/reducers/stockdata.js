import * as types from '../constants/ActionTypes'

const stockData = (state = [], action) => {
	switch (action.type) {
		case types.DATA_LIST:
			return action.data
		default:
			return state
	}
}

export default stockData