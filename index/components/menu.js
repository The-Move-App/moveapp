import * as React from "react";
import { Animated, View, TouchableOpacity, StyleSheet } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { Text, Image } from "react-native-elements";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import {
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-material-cards";
import Constants from "expo-constants";

import FlipCard from "react-native-flip-card";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const FirstRoute = () => (
  <>
    <View style={[styles.container, { backgroundColor: "#FFFFFF" }]}>
      <FlipCard
        style={styles.card}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd) => {
          console.log("isFlipEnd", isFlipEnd);
        }}
      >
        {/* Face Side */}
        <View style={styles.face}>
          <Image
            source={{ uri: "https://binaries.templates.cdn.office.net/support/templates/en-us/lt16412134_quantized.png" }}
            style={{ marginTop: 75, width: 300, height: 500 }}
          />
          <Text>Event Description.</Text>
        </View>
        {/* Back Side */}
        <View style={styles.back}>
          <Card style ={{marginTop: 75}}>
            <Card.Content>
              <Title>Event title</Title>
              <Paragraph>Event content</Paragraph>
            </Card.Content>
            <Card.Cover 
            source={{ uri: "https://binaries.templates.cdn.office.net/support/templates/en-us/lt16412134_quantized.png" }}
            style={{width: 300, height: 400 }} />
            <Card.Actions>
              <Button>Ignore Event</Button>
              <Button>Add Event</Button>
            </Card.Actions>
          </Card>
          <Text>Event Flyer.</Text>
        </View>
      </FlipCard>
    </View>
  </>
);

const SecondRoute = () => (
  <>
    
    <View style={[styles.container, { backgroundColor: "#FFFFFF" }]}>
      <Text>Hello.</Text>
      </View>
  </>
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "The Move" },
      { key: "second", title: "Organizations" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
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
