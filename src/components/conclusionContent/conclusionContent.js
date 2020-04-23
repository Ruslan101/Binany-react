import React from 'react';
import down_currency from '../../img/down_currency.png';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';

export default class Conclusion extends React.Component {
	constructor(props) {
		super(props);

		this.menuItem = [ '¥ CNY', '€ EUR', '₽ RUB', '$ USD', '£ GBP'];
		this.state = { selectionItem: this.menuItem[0] };
		this.menuItems = this.menuItem.map((item, i) => {
            return (
                <li key={i}>
                    <MenuItem>{item}</MenuItem>
                </li>
            );
        });
	}
	handleSelection = (item) => {
		this.setState({ selectionItem: item });
	}
    render() {
        return(
            <div className="conclusion_content">
				<p id="conclusion">Заявка на вывод средств</p>
				<div className="conclusion_line_1">
					<div>
						<p>Всего</p>
						<span>$25,000</span>
					</div>
					<div>
						<p>Доступные средства</p>
						<span>$25,000</span>
					</div>
					<div>
						<p>Бонусы</p>
						<span>$1,000</span>
					</div>
				</div>
				<form action="post" className="conclusion_line_2">
					<Wrapper onSelection={this.handleSelection} closeOnSelection={true}>
						<Button id="drop_menu_currency" tag="div">
							<p>Валюта</p>
							<p id="usd">{this.state.selectionItem}
                            	<img src={down_currency} id='currency_img' alt="down_drop" />
                        	</p>
							<Menu isOpen={false}>
								<ul id="currency_drop_menu">
									{this.menuItems}
								</ul>
							</Menu>
						</Button>
					</Wrapper>
					<div>
						<p>Сумма</p>
						<p>$   <input type="text" placeholder="100" /></p>
					</div>
					<input type="submit" value="Отправить заявку" />
				</form>
				<p className="end_text">Минимальная сумм а вывода 10,00 s. Деньги спишутся со счета в момент выплаты заявки.</p>
				<p className="end_text">Вывод средств осуществляется теми же платежными методами, с которых вы вводили деньги в систему.</p>
			</div>
        );
    }
} 