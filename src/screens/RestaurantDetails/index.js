import { View, Text, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem';
import restaurants from '../../../assets/data/restaurants.json';
import Header from './Header';
import { styles } from './styles';


const restaurant = restaurants[0];

const RestaurantDetails =() => {
    return(
        <View style={styles.page}>
        
            <FlatList 
                ListHeaderComponent={() => <Header restaurant={restaurant} />}
                data={restaurant.dishes}
                renderItem={({item}) => <DishListItem dish={item} />}
            />
            <Ionicons 
                name="arrow-back-circle" 
                size={45} 
                color="white" 
                style={styles.icon}
            />
        </View>
    );
};

export default RestaurantDetails;
