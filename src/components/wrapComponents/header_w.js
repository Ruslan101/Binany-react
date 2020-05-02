import { connect } from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import Header from '../header/header.js';

var Header_w;

export default Header_w = connect(mapStateToProps("Header"), mapDispatchToProps("Header"))(Header);