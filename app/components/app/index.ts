import { connect } from 'react-redux';
import { AppView } from './app.view';
import { onPing } from '../../redux/actions/app';

const mapStatetoProps = (state: any) => (state);
const mapDispatchToProps = { onPing };

export default connect(mapStatetoProps, mapDispatchToProps)(AppView);
