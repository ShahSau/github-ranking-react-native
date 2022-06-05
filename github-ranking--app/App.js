import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './src/components/AppBar';
import Main from './src/components/Main';



export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <Main />
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
});
