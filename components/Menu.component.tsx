import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import DoarScreen from './DoarScreen';

const FooterComponent = () => (
  <View style={styles.footer}>
    <Text>Footer Component</Text>
  </View>
);

const DoarComponent = () => (
  <View style={styles.content}>
    <DoarScreen/>
  </View>
);

const PedirComponent = () => (
  <View style={styles.content}>
    <Text>Conteúdo para Pedir</Text>
  </View>
);

const MyComponent = () => {
  const [value, setValue] = React.useState('Doar'); // Inicializa com 'Doar'

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
      <FooterComponent />
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
