import { connect } from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import SideBar from '../sideBar/sideBar.js';

var SideBar_w;

export default SideBar_w = connect(mapStateToProps("SideBar"), mapDispatchToProps("SideBar"))(SideBar);