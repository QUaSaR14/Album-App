//Import Library
import React from 'react'
import { View, Text, AppRegistry } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

//Functional Component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'ALBUMS'} />
        <AlbumList />
    </View>
);


//Render it on the device
AppRegistry.registerComponent("albums", () => App);
