import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuComponent from './components/Menu.component';

export default function App() {
  return (
    <View style={styles.container}>
      <MenuComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
