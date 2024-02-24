import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import CartScreen from "./screen/CartScreen";
import { Provider } from "react-redux";
import store from "./store";
import CallendarScreen from "./screen/CallendarScreen";
import SuccessScreeen from "./screen/SuccessScreen";

const Stack = createNativeStackNavigator();

//Unused function
function HeaderLeft({ navigation }) {
  return (
    <View style={{ backgroundColor: "red" }}>
      <Icon name="angle-left" size={30} color="#1841c7" />
    </View>
  );
}

function HeaderTitle({ navigation }) {
  return (
    <View style={{ flexDirection: "row", marginRight: 15 }}>
      <View style={{ justifyContent: "center" }}>
        <Icon name="angle-left" size={30} color="#1841c7" />
      </View>
      <View style={{ flex: 1 }}>
        <Image
          source={{
            uri: "https://www.techup.co.in/wp-content/uploads/2020/03/techup_final_logo.png",
          }}
          style={{ widith: 100, height: 60, resizeMode: "contain" }}
        />
      </View>
      <View style={{ justifyContent: "center", padding: 5 }}>
        <MaterialCommunityIcons name="cart" size={30} color="#1841c7" />
      </View>
    </View>
  );
}

//Unused function
function HeaderRight({ navigation }) {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <MaterialCommunityIcons name="cart" size={30} color="#1841c7" />
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            // options={{headerShown: false}}
            options={{
              title: "My home",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen
            name="Callendar"
            options={{
              title: "Book Appointment",
            }}
            component={CallendarScreen}
          />
          <Stack.Screen
            name="SuccessScr"
            component={SuccessScreeen}
            options={{ title: "Success" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
