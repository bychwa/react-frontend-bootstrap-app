import { connect } from 'react-redux';
import { DashboardView } from './dashboard.view';
import { onPing, onPong } from '../../../redux/actions/app';

const mapStatetoProps = (state: any) => (state);
const mapDispatchToProps = { onPing, onPong };

export default connect(mapStatetoProps, mapDispatchToProps)(DashboardView);
