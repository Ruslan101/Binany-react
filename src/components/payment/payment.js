import React from 'react';
import Payment_2 from './payment_2.js';
import qivi from '../../img/qiwi.png';
import visa from '../../img/visa_mcard.png';
import yandex from '../../img/yandex.png';
import webmoney from '../../img/webmoney.png';
import skrill from '../../img/skrill.png';

export default class Payment extends React.Component {
	constructor(props) {
		super(props);

		this.state = { isSelected: false, method: null };
	}
	selectMethod = (method) => {
			this.setState({ isSelected: true, method: method });
	}
    render() {
		if(this.state.isSelected)
			return <Payment_2 method={this.state.method} />
		
        return(
            <>
                <p id="payment">Выберите способ оплаты</p>
			    <p className="main_content_text">Банковские карты</p>
				<div id="mcard" onClick={() => this.selectMethod(0)}>
                	<img src={visa} alt="visa & mcard" />
            	</div>
				<p className="main_content_text">Электронные платежные системы</p>
				<div className="cards_container">
					<div onClick={() => this.selectMethod(1)}>
						<img src={qivi} alt="qiwi_card" />
					</div>
					<div>
						<img onClick={() => this.selectMethod(2)} src={yandex} alt="yandex_card" />
					</div>
					<div onClick={() => this.selectMethod(3)}>
						<img src={webmoney} alt="webmoney_card" />
					</div>
					<div onClick={() => this.selectMethod(4)}>
						<img src={skrill} alt="skrill_card" />
					</div>
				</div>
        	</>
		);
    }
}