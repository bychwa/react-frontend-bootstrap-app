import * as React from 'react';
import { Container, Loader, Segment, Header, Button, Card } from 'semantic-ui-react';
const ReactHighcharts = require('react-highcharts/ReactHighstock.src');
import { DashboardState } from '../../../redux/reducers/dashboard';
import { AppState } from '../../../redux/reducers/app';

type DashboardViewProps = {
  onPing: () => void,
  onPong: () => void,
  onFetchStats: () => void,
  app: AppState,
  dashboard: DashboardState
};

export class DashboardView extends React.Component<DashboardViewProps, any> {
  constructor(props: DashboardViewProps) {
    super(props);
  }
  componentDidMount() {
    this.props.onFetchStats();
  }
  getChartConfigs() {
    console.log();
    const rawstats = this.props.dashboard.stats || [];
    const seriesData = rawstats
    .reduce((series, _data) => {
      series.push([_data.date, _data.time.elapsedTime]);
      return series;
      // _.keys(_data.time)
      // .forEach(key=>{
      //   [key]
      // })
    }, [] as any);
    // const data = [[1220832000000, 22.56], [1220918400000, 21.67], [1221004800000, 21.66], [1221091200000, 21.81], [1221177600000, 21.28], [1221436800000, 20.05], [1221523200000, 19.98], [1221609600000, 18.26], [1221696000000, 19.16], [1221782400000, 20.13], [1222041600000, 18.72], [1222128000000, 18.12], [1222214400000, 18.39], [1222300800000, 18.85], [1222387200000, 18.32], [1222646400000, 15.04], [1222732800000, 16.24], [1222819200000, 15.59], [1222905600000, 14.3], [1222992000000, 13.87], [1223251200000, 14.02], [1223337600000, 12.74], [1223424000000, 12.83], [1223510400000, 12.68], [1223596800000, 13.8], [1223856000000, 15.75], [1223942400000, 14.87], [1224028800000, 13.99], [1224115200000, 14.56], [1224201600000, 13.91], [1224460800000, 14.06], [1224547200000, 13.07], [1224633600000, 13.84], [1224720000000, 14.03], [1224806400000, 13.77], [1225065600000, 13.16], [1225152000000, 14.27], [1225238400000, 14.94], [1225324800000, 15.86], [1225411200000, 15.37], [1225670400000, 15.28], [1225756800000, 15.86], [1225843200000, 14.76], [1225929600000, 14.16], [1226016000000, 14.03], [1226275200000, 13.7], [1226361600000, 13.54], [1226448000000, 12.87], [1226534400000, 13.78], [1226620800000, 12.89], [1226880000000, 12.59], [1226966400000, 12.84], [1227052800000, 12.33], [1227139200000, 11.5], [1227225600000, 11.8], [1227484800000, 13.28], [1227571200000, 12.97], [1227657600000, 13.57], [1227830400000, 13.24], [1228089600000, 12.7], [1228176000000, 13.21], [1228262400000, 13.7], [1228348800000, 13.06], [1228435200000, 13.43], [1228694400000, 14.25], [1228780800000, 14.29], [1228867200000, 14.03], [1228953600000, 13.57], [1229040000000, 14.04], [1229299200000, 13.54]];
    return {
      rangeSelector: {
        selected: 1
      },
      title: {
        text: 'Endpoint Timings'
      },
      series: [{
        name: 'AAPL',
        data: seriesData,
        type: 'spline'
      }]
    };
  }

  render() {
    return (
      <Container>
        <Loader active={this.props.dashboard.loading}/>
        <Header size='huge' content='START HERE!' textAlign='center' style={{ color: 'white' }} />
        <Card fluid={true}>
          <Card.Content textAlign='center'>
            <Segment>
              <br /><br />
              <ReactHighcharts config={this.getChartConfigs()} />
            </Segment>
          </Card.Content>
          <hr />
          <Card.Content extra={true}>
            <Segment color={this.props.app.isPinging ? 'red' : 'blue'} raised={true}>
              <Header
                size='huge' textAlign='center'
                content={this.props.app.isPinging ? 'PINGING...' : 'PONG!'}
              />
            </Segment>
          </Card.Content>
          <Card.Content textAlign='center'>
            <Button
              primary={true}
              onClick={this.props.app.isPinging ? this.props.onPong : this.props.onPing}
              content={this.props.app.isPinging ? 'PONG!' : 'PING ME'}
            />
          </Card.Content>
        </Card>
      </Container>
    );
  }
}
