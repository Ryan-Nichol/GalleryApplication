import React from 'react';
import { View } from 'react-native';
import ImageList from './src/component/ImageList';
import Header from './src/component/Header';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText='Image Gallery' />
        <ImageList></ImageList>
      </View>
    );
  }
}

