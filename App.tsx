import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

//We create the route type here
type RootStackParamList = {
  Home: undefined,
  Notifications: undefined,
  Sun: undefined
};

//Create the Stack object and give it the type we created above
const Stack = createStackNavigator<RootStackParamList>();


//Create the type that we will use for the navigation object
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

//Create the type that we will use for the navigation object
type SunScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Sun'
>;

//Create the type that we will use for the navigation object
type NotificationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Notifications'
>;

//instead of HomeScreen({navigation}) we use a slightly approach to accomplish the same thing
function HomeScreen() {

  //We create the navigation object from scratch and give it the type we created above
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
      //Then here we can use it normally
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button
        onPress={() => navigation.navigate('Sun')}
        title="Go to sun screen"
      />
    </View>
  );
}

function SunScreen() {
  const navigation = useNavigation<SunScreenNavigationProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sun Screen</Text>
      <Button
        onPress={() => navigation.goBack()}
        title="Go back home"
      />
    </View>
  );
}

function NotificationsScreen() {
  const navigation = useNavigation<NotificationScreenNavigationProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notification Screen</Text>
      <Button
        onPress={() => navigation.goBack()}
        title="Go back home"
      />
    </View>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Sun" component={SunScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
