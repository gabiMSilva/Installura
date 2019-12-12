/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';


import {} from 'react-native/Libraries/NewAppScreen';
import Post from './src/components/Post';

const fotos = [
  {id: 1, usuario: 'Gabriela'},
  {id: 2, usuario: 'Herbert'},
  {id: 3, usuario: 'Bruna'},
  {id: 4, usuario: 'Raquel'},
];


const App: () => React$Node = () => {
  return (
    <FlatList
    style={styles.container}
    data={fotos}
    keyExtractor={item => item.id}
    renderItem={({item}) => (
      <Post foto={item}/>
      )}
      />
      );
    };
    
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  foto: {
    width: width,
    height: width,
  },
});

export default App;
