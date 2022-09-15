import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigate from "./src/screens/tabNavigation";


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigate/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerText: {
    fontSize: 18
  },
});
