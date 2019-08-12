import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialNavigationOptions: "Search",
    defaultNavigationOptions: {
      title: "Restaurantes Rodrigo"
    }
  }
);

export default createAppContainer(navigator);
