import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import Config from './pages/Config';
import Game from './pages/Game';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Config,
    Game,
  }),
);

export default Routes;
