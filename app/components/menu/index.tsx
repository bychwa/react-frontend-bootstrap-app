import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class TopMenu extends React.Component {

  render () {
    return (
      <Menu pointing>
        <Menu.Item as={NavLink} to={'/dashboard'} name='Dashboard' />
        <Menu.Item as={NavLink} to={'/endpoints'} name='endpoints' />
        <Menu.Item as={NavLink} to={'/probes'} name='probes' />
        <Menu.Menu position='right'>
          <Menu.Item as={NavLink} to={'/logout'} name='logout' />
        </Menu.Menu>
      </Menu>
    );
  }
}
