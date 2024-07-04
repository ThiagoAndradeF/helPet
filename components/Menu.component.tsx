import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import DoarScreen from './DoarScreen';
import AddItemForm from './AddItemForm';

const FooterComponent = () => (
  <View style={styles.footer}>
    <Text>Footer Component</Text>
  </View>
);

const DoarComponent = () => (
  <View style={styles.content}>
    <DoarScreen />
  </View>
);

// Interface para os itens
interface Item {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const MyComponent = () => {
  const [value, setValue] = React.useState('Doar');
  const [items, setItems] = React.useState<Item[]>([]); // Armazena os itens

  const handleAddItem = (newItem: Item) => {
    setItems(currentItems => [...currentItems, newItem]);
  };

  const PedirComponent = () => (
    <View style={styles.content}>
      <AddItemForm onAddItem={handleAddItem} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'Doar',
            label: 'Doar',
          },
          {
            value: 'Pedir',
            label: 'Pedir',
          }
        ]}
      />
      {value === 'Doar' && <DoarComponent />}
      {value === 'Pedir' && <PedirComponent />}
      {/* <FooterComponent /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#eee',
    width: '100%',
    alignItems: 'center',
  },
  content: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    width: '100%',
    alignItems: 'center',
  },
});

export default MyComponent;
