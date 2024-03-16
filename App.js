import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';

import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Subscribe from './components/Subscribe';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container} initialRouteName='Welcome'>
        <Stack.Screen options={{ title: "Welcome" }} name='Welcome' component={Welcome} />
        <Stack.Screen options={{ title: "Subscribe" }} name='Subscribe' component={Subscribe} />
      </Stack.Navigator>
      <View style={styles.footer}>
        <Footer />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
  },
  footer: {
    flex: 0.1,
    backgroundColor: '#495E57',
  },
});
