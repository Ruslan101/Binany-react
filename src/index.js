import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import loadable from "@loadable/component";
import Loading from './components/loanding/loanding.js';
import { store } from './components/store/store.js';
import './reset.css';
import './index.css';
import * as serviceWorker from './serviceWorker'; serviceWorker.register();
// Components dynamic import
const MainContent_w = loadable(() => import("./components/wrapComponents/mainContent_w.js"), { fallback: <Loading /> });
const SideBar_w = loadable(() => import("./components/wrapComponents/sideBar_w.js"), { fallback: <Loading /> });
const Header_w = loadable(() => import("./components/wrapComponents/header_w.js"), { fallback: <Loading /> });
const Nav_w = loadable(() => import("./components/wrapComponents/nav_w.js"), { fallback: <Loading /> });
const OperationsBottom_w = loadable(() => import("./components/wrapComponents/operationsBottom_w.js"), { fallback: <Loading /> });

class Main extends React.Component {
	render() {
    	return(
			<>
				<SideBar_w />
				<Header_w />
				<main>
					<Nav_w />
					<div className="main_container">
						<MainContent_w />
					</div>
					<OperationsBottom_w />
				</main>
			</>
		);
  	}
}

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById("root"));