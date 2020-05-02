import React from 'react';

export default class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.domNode = React.createRef();
		this.elements = new Array();
	}
	handleClick = (e) => {
		this.props.changeVisibleComponent(e);
	}
	shouldComponentUpdate(nextProps) {
		if(this.props.visibleComponent === nextProps.visibleComponent)
			return false;
		else {
			this.elements[this.props.visibleComponent].style.borderColor = "#d0d8e2";
			this.elements[nextProps.visibleComponent].style.borderColor = "#008aff";

			return true;
		}
	}
	componentDidMount() {
		this.elements = this.domNode.current.children;
		this.elements[this.props.visibleComponent].style.borderColor = "#008aff";
	}
	render () {
		return (
		    <nav>
			    <div className="nav_left" ref={this.domNode}>
				    <p onClick={() => this.handleClick(0)}>Пополнить</p>
				    <p onClick={() => this.handleClick(1)}>Вывести</p>
				    <p onClick={() => this.handleClick(2)}>Операции</p>
				    <p onClick={() => this.handleClick(3)}>Сделки</p>
					<p onClick={() => this.handleClick(4)}>Профиль</p>
					<p onClick={() => this.handleClick(5)}>Котировки</p>
				</div>
				<div className="nav_right">
					<p>Счет №: 31998640USD</p>
				</div>
			</nav>
		);
	}
}