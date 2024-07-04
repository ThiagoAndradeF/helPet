import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

interface Item {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const items: Item[] = [
  {
    id: '1',
    title: 'Neiton Douradinha',
    description: 'Tá precisando de uma casa nova, mas é um cachorro muito bonito e saudável.',
    imageUrl: './assets/cachorro1.jpg',
    price: 'R$100,00'
  },
  {
    id: '2',
    title: 'Bruninho Cabeção',
    description: 'Está precisando de um cone novo, esse dele já tá nas ultimas',
    imageUrl: './assets/cachorro2.jpg',
    price: 'R$200,00'
  },
  {
    id: '3',
    title: 'Jorginho Mocapão',
    description: 'Descrição do Produto 2',
    imageUrl: './assets/cachorro3.jpg',
    price: 'R$200,00'
  },
  // Adicione mais produtos conforme necessário
];




const renderItem = ({ item }: { item: Item }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: item.imageUrl }} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <Text style={styles.price}>{item.price}</Text>
  </View>
);

const MyList: React.FC = () => (
  <FlatList
    data={items}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />
);

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
});

export default MyList;
