import React from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';
import down_currency from '../../img/down_currency.png';
import left from '../../img/left.png';

export default class PaymentMethod extends React.Component {
	constructor(props) {
		super(props);

		this.menuItem = [ '$ USD', '¥ CNY', '€ EUR', '₽ RUB', '£ GBP'];
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
            <>
                <a href="#">
					<img src={left} alt="back" />Назад к выбору способа оплаты
				</a>
                <div className="main_content_blocks" style={{marginTop: '40px'}}>
                	<div>$10,000<br /><span>Бонус 50%</span></div>
                	<div>$5,000<br /><span>Бонус 30%</span></div>
                	<div>$3,000<br /><span>Бонус 30%</span></div>
					<Wrapper onSelection={this.handleSelection} closeOnSelection={false} id="wrapper">
						<Button id="currency" tag="div">
							<div>Валюта<br />
								<span>{this.state.selectionItem}</span>
							</div>
								<img id="currency_img" src={down_currency} alt="dowm" id="down_currency_img"  />
						</Button>
						<Menu isOpen={false}>
							<ul id="currency_drop_menu" className="currenty_drop_menu_PaymentMethod">
								{this.menuItems}
							</ul>
						</Menu>
					</Wrapper>
        		</div>
        		<div className="main_content_blocks">
          			<div>$1,000<br /><span>Бонус 20%</span></div>
          			<div>$500<br /><span>Бонус 20%</span></div>
          			<div>$250<br /><span>Бонус 20%</span></div>
          			<div id="sum">
            			<div>Сумма</div><br />
            			<div>$
              				<input title="Введите свою сумму" type="text" placeholder={100} />
            			</div>
          			</div>
        		</div>
        		<div className="main_content_blocks">
          			<div>$100<br /><span>Бонус 10%<span /></span></div>
          			<div>$50<br /><span>Бонус 10%</span></div>
          			<div>$20<br /><span>Без бонуса</span></div>
          			<div id="topup">Пополнить</div>
				</div>
            </>
        );
    }
}