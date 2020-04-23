import { connect } from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import Nav from '../nav/nav.js';

var Nav_w;

export default Nav_w = connect(mapStateToProps("Nav"), mapDispatchToProps("Nav"))(Nav);