/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, FlatList  } from 'react-native';
import products from './src/data/products';
import ProductScreen from './screens/ProductScreen';
const App = () => {
  return (
    <View>
      <ProductScreen />
    </View>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item})=>(
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.image }} // Utilisation de l'URI de l'image
              style={styles.image}
            />
          </View>
        )}
        numColumns={2}
        key={2}
        keyExtractor={(item)=> item.id}
      />
      <Image
       
            source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png' }}
            //tyle={Styles.image}
            style={{width:'100%',aspectRatio:1,}} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  }
});*/
import React from 'react';
import { View } from 'react-native';
import ProductScreen from './src/screens/ProductScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ProductScreen />
    </View>
  );
  <Text>Bienvenue chez Nike !</Text>
}