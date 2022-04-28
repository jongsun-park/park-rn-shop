import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const DummyScreen = () => {
  return (
    <View>
      <Text>Dummy Screen</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StacNav = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="stack 1" component={DummyScreen} />
    <Stack.Screen name="stack 2" component={DummyScreen} />
    <Stack.Screen name="stack 3" component={DummyScreen} />
  </Stack.Navigator>
);

const Navigation = () => (
  <Drawer.Navigator
    screenOptions={{
      headerRight: ({ tintColor }) => (
        <View style={{ flexDirection: "row" }}>
          <Ionicons color={tintColor} size={32} name="person-circle-outline" />
          <Ionicons color={tintColor} size={32} name="cart" />
        </View>
      ),
    }}
  >
    <Stack.Screen name="Home" component={StacNav} />
    <Stack.Screen name="Account" component={DummyScreen} />
    <Stack.Screen name="Cart" component={DummyScreen} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <StatusBar />
    </>
  );
}

const styles = StyleSheet.create({});
