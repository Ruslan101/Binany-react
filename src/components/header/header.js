import React from 'react';
import Menu from '../../img/Menu.png';
import Menu_border from '../../img/Menu_border.png';
import binany_logo from '../../img/binany_logo.png';
import down from '../../img/down.png';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = { menu: false };
		this.dropMenu = React.createRef();
	}
	handleDrop = () => {
		this.dropMenu.current.style.display = (this.state.menu) ? "none" : "block";

		this.setState(state => ({ menu: !state.menu }));
	}
	handleMenu = () => {
		this.props.changeSidbarState(this.props.isOpen);
	}
    render() {
        return(
            <header>
        		<div className="header_left">
          			<img src={Menu} alt="menu" onClick={this.handleMenu} />
          			<img src={Menu_border} alt="menu_border" />
          			<img src={binany_logo} alt="binany" />
        		</div>
        		<div className="header_right">
          			<div className="drop_menu" onClick={this.handleDrop}>
            			<img src={Menu_border} alt="menu_border" />
            			<p>Учебный счёт<br /><span>$20 000.00</span></p>
            			<img src={down} alt="down_drop" />
						<div className="drop_menu_content" ref={this.dropMenu}>
							<div className="drop_menu_content_top">
								<p className="drop_menu_content_top_text_1">Реальный счёт</p>
								<div id="drop_menu_content_top_line">
									<div>
										<p className="drop_menu_content_top_text_2">Депозит</p>
										<p>$0.00</p>
									</div>
									<div>
										<p className="drop_menu_content_top_text_2">Бонусы</p>
										<p>$0.00</p>
									</div>
								</div>
							</div>
							<div className="drop_menu_content_bottom">
								<p className="drop_menu_content_top_text_3">Учебный счёт</p>
								<p className="drop_menu_content_top_text_4">$20 000.00</p>
							</div>
						</div>
					</div>
          			<img src={Menu_border} alt="menu_border" />
          			<a id="replenish" href="#"><span>Пополнить счет</span></a>
        		</div>
      		</header>
        );
    }
}