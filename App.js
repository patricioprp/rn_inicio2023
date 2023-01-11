import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreeen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreeen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Color: ColorScreen,
    Counter: CounterScreen,
    Image: ImageScreen,
    List: ListScreen,
    Home: HomeScreen,
    Components: ComponentsScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreeen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Aplicacion",
    },
  }
);

export default createAppContainer(navigator);
