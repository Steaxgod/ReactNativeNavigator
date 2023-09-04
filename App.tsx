import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
const Blank = () => null;
import Week1 from "./Week1/Default";
// import Week2 from './Week2/Week2';
// import Week3 from './Week3/Week3';
// import Week4 from './Week4/Week4';
// import Week5 from './Week5/Week5';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Week 5: Midterm"
        screenOptions={{ headerShown: false, drawerPosition: "right" }}
      >
        <Drawer.Screen name="Week 1: Setup Expo" component={Week1} />
        <Drawer.Screen name="Week 2: Photo Gallery" component={Blank} />
        <Drawer.Screen name="Week 3: Photo Gallery 2.0" component={Blank} />
        <Drawer.Screen name="Week 4: Weather App" component={Blank} />
        <Drawer.Screen name="Week 5: Midterm" component={Blank} />
        <Drawer.Screen name="Week 6: Empty" component={Blank} />
        <Drawer.Screen name="Week 7: Empty" component={Blank} />
        <Drawer.Screen name="Week 8: Empty" component={Blank} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
