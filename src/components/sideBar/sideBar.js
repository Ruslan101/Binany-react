import React from 'react';
import closeImg from '../../img/close.png';
import menuBorder from '../../img/Menu_border.png';
import logo from '../../img/binany_logo.png';
import avatar from '../../img/sidebar_avatar.png';
import flagRu from '../../img/flag_ru.png';
import sound from '../../img/sound.png';
import exit from '../../img/exit.png';
import background from '../../img/black_background.png';

export default class SideBar extends React.Component {
	constructor(props) {
		super(props);

		this.domNode = React.createRef();
	}
	handleClick = () => {
		this.props.changeSidbarState(this.props.isOpen);
	}
	shouldComponentUpdate() {
		this.domNode.current.style.display = this.props.isOpen ? "flex" : "none";
		return true;
	}
    render() {
        return(
            <aside ref={this.domNode} style={{display: 'none'}}>
                <div className="sidebar_menu">
                    <div className="sidebar_menu_head">
                        <div className="menu_button_container" id="menu_button" onClick={this.handleClick}>
                            <img src={closeImg} alt="close" />
                        </div>
                        <img src={menuBorder} alt="menu_border" />
                        <img src={logo} alt="binany" />
                    </div>
                    <div className="sidebar_menu_bottom">
                        <div className="sidebar_menu_bottom_top">
                            <div className="sidebar_menu_bottom_top_container">
                                <img src={avatar} alt="avatar" />
                                <div>
                                    <p>Name</p>
                                    <p id="score">Счет №: 334337373</p>
                                </div>
                            </div>
                            <div className="sidebar_menu_bottom_top_items">
                                <p>Пополнить</p>
                            	<p>Вывести</p>
                            	<p>Операции</p>
                				<p>Сделки</p>
                				<p>Профиль</p>
              				</div>
              				<div className="sidebar_menu_bottom_top_items_bottom">
                				<p>Котировки</p>
                				<p>О компании</p>
                				<p>Регуляция</p>
                				<p>Дополнительно</p>
              				</div>
            			</div>
            			<div className="sidebar_menu_bottom_bottom">
              				<div className="sidebar_menu_bottom_bottom_flag">
                				<img src={flagRu} alt="flag ru" />
              				</div>
              				<div className="sidebar_menu_bottom_bottom_container">
                				<div className="sidebar_menu_bottom_bottom_sound">
                  					<img src={sound} alt="sound" />
                				</div>
                				<div className="sidebar_menu_bottom_bottom_exit">
                  					<img src={exit} alt="exit" />
                				</div>
              				</div>
            			</div>
          			</div>
        		</div>
        		<div className="sidebar_background">
          			<img src={background} alt="background" onClick={this.handleClick} />
        		</div>	
      		</aside>
        );
    }
}