import { take,call,put } from 'redux-saga/effects'

const handleNewMessage = function* handleNewMessage(params) {
	debugger;
	const action = yield take(params.socket)
	while (true) {
		debugger;
		//const action = yield take(channel)
		yield put(action)
	}
}

export default handleNewMessage