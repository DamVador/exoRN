import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../../pages/Home"
import Favorites from "../../pages/Favorites"
import * as React from 'react';


const Tab = createBottomTabNavigator();

function BottomBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={Home} />
      <Tab.Screen name="Favoris" component={Favorites} />
    </Tab.Navigator>
  );
}

export default BottomBar