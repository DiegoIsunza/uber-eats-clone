import {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {AntDesign} from "@expo/vector-icons";

import restaurants from '../../../assets/data/restaurants.json';

const dish = restaurants[0].dishes[0];

const DishDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const onMinus = () => {
    setQuantity((prevQuantity) => prevQuantity > 1 ? prevQuantity - 1 : 1);
  };

  const onPlus = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <AntDesign name="minuscircleo" size={60} color={"black"} onPress={onMinus} suppressHighlighting={true} />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign name="pluscircleo" size={60} color={"black"} onPress={onPlus} suppressHighlighting={true} />
      </View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>
        Add {quantity} to cart (${getTotal()})
        </Text>
      </View>
    </View>
  );
}

export default DishDetails;

const styles = StyleSheet.create({
 page:{
    flex:1,
    width:'100%',
    paddingVertical:40,
    padding:10,
 },
 name: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
 },
 description: {
    color: "gray",
 },
 separator: {
    height:1,
    backgroundColor:'lightgray',
    marginVertical:10,
 },
 row:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    marginTop:50
 },
 quantity:{
    marginHorizontal:20,
    fontSize:25,
    fontWeight:'600',
 },
 button:{
    backgroundColor:'black',
    marginTop: "auto",
    padding:20,
    alignItems:'center',
 },
 buttonText:{
    color:"white",
    fontWeight:"600",
    fontSize:20,
 },
});