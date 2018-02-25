import { connect } from 'react-redux';
import { AppView } from './app.view';
import { onPing, onPong } from '../../redux/actions/app';

const mapStatetoProps = (state: any) => (state);
const mapDispatchToProps = { onPing, onPong };

export default connect(mapStatetoProps, mapDispatchToProps)(AppView);
