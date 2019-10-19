import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import Star from './pages/Star';
import Game from './pages/Game';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Star,
    Game,
  }),
);

export default Routes;
