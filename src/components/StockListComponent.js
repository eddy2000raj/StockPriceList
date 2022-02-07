import React from 'react'

let firstLoad=false;
let obj={0:[]};

function RowDetails(props){
	let values=Object.values(props.data)[0];
	let width=Math.abs(values[2])*100;

	if(props.rowNo%2!=0){
	return (<tr >
		<td>{values[1]}</td> 
		<td>{Math.abs(values[2])}</td> 
		<td>{values[1]*Math.abs(values[2])}</td> 
		<td >{values[0]} 
			<object   width={width} height="20" class="bar1"></object>
		</td> 
		</tr>)
	}else{
		return (<tr >
				<td>{values[0]}
				<object   width={width} height="20" class="bar"></object>
				</td> 
				<td>{values[1]*Math.abs(values[2])}</td> 
				<td>{Math.abs(values[2])}</td> 
				<td>{values[1]}
				
				</td> 
				</tr>)

	}
}

function StockListComponent(props){
     
	  let price=0,isLoading=true;
	  let count;
	  let messages=props.messages ;
	
      if(messages[0]!==undefined){
		  if(messages[1]!=undefined){
			price=messages[1][0][0];
			if(!firstLoad){
				let mObj=messages[1].map((m,i)=>{
					let ob={};
					ob[m[0]]=m;
					return ob;
				})
				obj['data']=mObj ;
				firstLoad=true;
			}else{
				price=messages[1][0];
				count=messages[1][1];
				if(count!=0){
					for(let i=0;i<obj['data'].length;i++){
						let asdasd=obj['data'][i].hasOwnProperty(price);
						if(asdasd){
							let newObj={};
							newObj[price]=messages[1];
							obj['data'][i]=newObj ;
							break;
						}
					}
				}
				
				
			}
			isLoading=false;
		  }
	  }else{
         
	  } 
	  
	  return(<section id="messages-list">
	  <table id="customers">
		  <tr>
		  	  <th>Count</th>
			  <th>Amount</th>
			  <th>Total</th>
			  <th>Price</th>
		  </tr>
		  {!isLoading &&
		  obj.data.map((o,i)=>{
			if(i%2!=0){
				return <RowDetails data={o} rowNo={i}></RowDetails>
			}
			
		  })}
		  {isLoading &&
		  (<tr>
			  <th colSpan="4">loading....</th>
		  </tr>)}
		  </table>
		  <table id="customers">
		  <tr>
		  		<th>Price</th>
				  <th>Total</th>
		  	  <th>Amount</th>
		  	  <th>Count</th>
			  
			  
		  </tr>
		  {!isLoading &&
		  obj.data.map((o,i)=>{
			if(i%2==0){
				return <RowDetails data={o} rowNo={i}></RowDetails>
			}
		  })}
		  {isLoading &&
		  (<tr>
			  <th colSpan="4">loading....</th>
		  </tr>)}
		  </table>
  		</section>)

}
	  

	 



export default StockListComponent