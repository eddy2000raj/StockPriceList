import { connect } from 'react-redux'
import StockListComponent from '../components/StockListComponent'

export const StockList = connect(state => ({
	messages: state.stockData
}), {})(StockListComponent)