import { StyleSheet, FlatList, View } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import restaurants from "../../../assets/data/restaurants.json";

const Home = () => {
  return (
    <View style={styles.page}>
      <FlatList 
       data={restaurants} 
       renderItem={({item}) =>  <RestaurantItem restaurant={item} />} 
       showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  }
});
