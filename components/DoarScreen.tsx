import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, FlatList } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

interface CarouselItem {
  image: string;
  name: string;
  description: string;
  price: string;
}

const data: CarouselItem[] = [
  {
    image: './assets/cachorro1.jpg',
    name: 'Brunito Cabeção',
    description: 'Doações para financiar um ',
    price: 'Falta $100',
  },
  {
    image: './assets/cachorro2.jpg',
    name: 'Brunito Cabeção',
    description: 'Doações para financiar um cone decente para o brunito',
    price: '$100',
  },
  {
    image: './assets/cachorro3.jpg',
    name: 'Jorginho do pão',
    description: 'Pão ta acabando e esse cachorro só come pão',
    price: '$50',
  },
];

const renderItem = ({ item }: { item: CarouselItem }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <Text style={styles.price}>{item.price}</Text>
  </View>
);

const CarouselComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: viewportWidth * 1.2,
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
    width: viewportWidth * 0.8,
  },
  image: {
    width: '100%',
    height: viewportWidth * 0.6,
    borderRadius: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default CarouselComponent;
