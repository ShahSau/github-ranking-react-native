import { View, StyleSheet,Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'#24292e',
    width:'100%',
    height: 200,
  },
  text:{
    color:'#fff',
    position:'absolute',
    top:'80%',
    left:'5%',
    fontSize: 25,
  }
  // ...
});

const AppBar = () => {
  return (
  <View style={styles.container}>
      <Text style={styles.text}>Repositories</Text>
  </View>
  )
};

export default AppBar;