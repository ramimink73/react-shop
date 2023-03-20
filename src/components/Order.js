import React, { Component } from 'react'
import { FaHeartBroken } from 'react-icons/fa'

export class Order extends Component {
	render() {
		return (
			<div className='item'>
				<img src={'./img/' + this.props.item.img} alt='' />
				<h2>{this.props.item.title}</h2>
				<b>{this.props.item.price}$</b>
				<FaHeartBroken
					className='delete-icon'
					onClick={() => this.props.onDelete(this.props.item.id)}
				/>
			</div>
		)
	}
}

export default Order
