import React from 'react'
import Background from '../comp/Background'
import Logo from '../comp/Logo'
import Header from '../comp/Header'
import Paragraph from '../comp/Paragraph'
import Button from '../comp/Button'
import { TabView, SceneMap } from "react-native-tab-view";
import { View, useWindowDimensions } from 'react-native';
import { Animated, TouchableOpacity, StyleSheet } from "react-native";
import { Text, Image } from "react-native-elements";
import { Card, Title } from "react-native-paper";
import Constants from "expo-constants";
import { CardList } from 'react-native-card-list';
import FlipCard from "react-native-flip-card";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} >
      <Logo />
      <Header>Move / Organizations</Header>
      <Paragraph>
        Check what moves are happening, or check which organizations are hosting events.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} >
      <Logo />
      <Header>Move / Organizations</Header>
      <Paragraph>
        Check what moves are happening, or check which organizations are hosting events.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});


export default function Dashboard({ navigation }) {
  
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'The Move' },
    { key: 'second', title: 'Organizations' },
  ]);

  return (
    <TabView
    navigationState={{ index, routes }}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{ width: layout.width }}
  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});