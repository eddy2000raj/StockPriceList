import {populateDATAList} from '../actions'


function setupSocket(emitter) { 
	
	const socket= emitter => {
	  //init the connection here
	  // init the connection here
	  const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
	  const payload=JSON.stringify( {"event":"subscribe","channel":"book","symbol":"tBTCUSD","prec":"P0","freq":"F0","len":"25","subId":"book|tBTCUSD"}) ;

	   ws.onopen=()=>{
			ws.send(payload);
		}
	  
	  ws.onmessage = e => {
		// dispatch an action with emitter here
		// dispatch an action with emitter here
		const data = JSON.parse(e.data);
		if(data instanceof Array){
			return emitter(populateDATAList(data))
			//return dispatch( { type: 'ACTION_TYPE', payload } )
		}
	  }
	  // unsubscribe function
	  return () => {
		// do whatever to interrupt the socket communication here
	  }
	}
	 return socket(emitter);
  }


/* const setupSocket = (dispatch)=> {
	
	  // init the connection here
	  const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

	 

	  const payload=JSON.stringify( {"event":"subscribe","channel":"book","symbol":"tBTCUSD","prec":"P0","freq":"F0","len":"25","subId":"book|tBTCUSD"}) ;

	   ws.onopen=()=>{
			ws.send(payload);
		}
	  
	  ws.onmessage = event => {
		// dispatch an action with emitter here
		const data = JSON.parse(event.data);
		if(data instanceof Array){
			return dispatch(populateDATAList(data))
			//return dispatch( { type: 'ACTION_TYPE', payload } )
		}
		
	  }
	  
  } */

export default setupSocket
