import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import Game from './pages/Game';
import Planet from './pages/Planet';
import Final from './pages/Final';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Game,
    Planet,
    Final,
  }),
);

export default Routes;
