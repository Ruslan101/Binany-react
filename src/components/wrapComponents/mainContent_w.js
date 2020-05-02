import { connect } from 'react-redux';
import MainContent from "../mainContent/mainContent.js";
import mapStateToProps from '../store/mapStateToProps';

var MainContent_w;

export default MainContent_w = connect(mapStateToProps("MainContent"), undefined)(MainContent);