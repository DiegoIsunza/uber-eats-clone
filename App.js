import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Home from './src/screens/Home';
import RestaurantDetails from './src/screens/RestaurantDetails';
import DishDetails from './src/screens/DishDetails';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      <DishDetails />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    // paddingVertical: 30,
  },
});
