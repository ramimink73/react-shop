import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import Categories from './components/Categories'
import ShowFullItem from './components/ShowFullItem'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: [],
			currentItems: [],
			items: [
				{
					id: 1,
					title: 'Стул чёрный',
					img: 'chair-black.jpg',
					desc: 'Основные части стула — сиденье и ножки. На нём можно сидеть',
					category: 'chairs',
					price: '49.99',
				},
				{
					id: 2,
					title: 'Стол',
					img: 'table.jpg',
					desc: 'Предмет обихода, мебельное изделие, имеющее приподнятую горизонтальную или наклонную поверхность, предназначенную для размещения на ней предметов и (или) для выполнения работ, принятия пищи, игр, рисования, обучения и другой деятельности.',
					category: 'tables',
					price: '149.99',
				},
				{
					id: 3,
					title: 'Диван',
					img: 'sofa.jpg',
					desc: 'Хотя диван используется в основном для сидения, его также можно использовать для лежания или сна.',
					category: 'sofa',
					price: '549.99',
				},
				{
					id: 4,
					title: 'Настольная Лампа',
					img: 'wall-light.jpg',
					desc: 'Такие лампы освещают сравнительно небольшое пространство. Их свет направлен так, чтобы хорошо освещать только поверхность стола. При этом лампу могут включать не только в вечернее, но и в дневное время, если естественного освещения не хватает.',
					category: 'light',
					price: '25.00',
				},
				{
					id: 5,
					title: 'Стул белый',
					img: 'chair-white.jpg',
					desc: 'Основные части стула — сиденье и ножки. На нём можно сидеть.',
					category: 'chairs',
					price: '49.99',
				},
			],
			ShowFullItem: false,
			fullItem: {},
		}
		this.state.currentItems = this.state.items
		this.addToOrder = this.addToOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
		this.onShowItem = this.onShowItem.bind(this)
	}
	render() {
		return (
			<div className='wrapper'>
				<Header orders={this.state.orders} onDelete={this.deleteOrder} />
				<Categories chooseCategory={this.chooseCategory} />
				<Items
					onShowItem={this.onShowItem}
					items={this.state.currentItems}
					onAdd={this.addToOrder}
				/>

				{this.state.showFullItem && (
					<ShowFullItem
						onAdd={this.addToOrder}
						onShowItem={this.onShowItem}
						item={this.state.fullItem}
					/>
				)}
				<Footer />
			</div>
		)
	}

	onShowItem(item) {
		this.setState({ fullItem: item })
		this.setState({ showFullItem: !this.state.showFullItem })
	}

	chooseCategory(category) {
		if (category === 'all') {
			this.setState({ currentItems: this.state.items })
			return
		}

		this.setState({
			currentItems: this.state.items.filter(el => el.category === category),
		})
	}

	deleteOrder(id) {
		this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
	}

	addToOrder(item) {
		let isInArray = false
		this.state.orders.forEach(el => {
			if (el.id === item.id) isInArray = true
		})
		if (!isInArray) this.setState({ orders: [...this.state.orders, item] })
	}
}

export default App
