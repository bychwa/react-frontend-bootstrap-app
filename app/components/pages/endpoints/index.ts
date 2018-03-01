import { connect } from 'react-redux';
import { EndpointsView } from './endpoints.view';
import { onCreateEndpoint, onFetchEndpoints } from '../../../redux/actions/endpoints';
import { MainState } from '../../../redux/redux';

const mapStatetoProps = (state: MainState) => ({ state: state.endpoints });
const mapDispatchToProps = { onCreateEndpoint, onFetchEndpoints };

export default connect(mapStatetoProps, mapDispatchToProps)(EndpointsView);
