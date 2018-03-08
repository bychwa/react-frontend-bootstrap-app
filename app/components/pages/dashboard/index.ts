import { connect } from 'react-redux';
import { DashboardView } from './dashboard.view';
import { onPing, onPong } from '../../../redux/actions/app';
import { onFetchStats } from '../../../redux/actions/dashboard';

const mapStatetoProps = (state: any) => (state);
const mapDispatchToProps = { onPing, onPong, onFetchStats };

export default connect(mapStatetoProps, mapDispatchToProps)(DashboardView);
