import * as React from 'react';
import { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Networth from './components/Networth';
import NewsAPI from './components/NewsAPI';
import ListThumbnailExample from './components/NewsAPI';

function HomeStackScreen() {
 return (
   <View>
     <Text style={{textAlign: 'center', marginTop: 100}}>Home    Screen</Text>
     <ListThumbnailExample></ListThumbnailExample>
   </View>
  );
}
function SettingsStackScreen() {
  return (
    <View>
    <Text style={{textAlign: 'center', marginTop: 100, backgroundColor: '#39CCCC', height: 25}}>Networth Calculator</Text>
    <Networth></Networth>
      
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Calculator" component=     {SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
