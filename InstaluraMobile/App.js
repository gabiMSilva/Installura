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
  Image,
  Text,
  View,
  Dimensions,
  FlatList,
} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';

const fotos = [
  {id: 1, usuario: 'rafael'},
  {id: 2, usuario: 'alberto'},
  {id: 3, usuario: 'vitor'},
];

const width = Dimensions.get('screen').width;

const App: () => React$Node = () => {
  return (
    <FlatList
      style={styles.container}
      data={fotos}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View>
          <View style={styles.cabecalho}>
            <Image
              source={require('./resources/img/alura.jpg')}
              style={styles.fotoDePerfil}
            />
            <Text>{item.usuario}</Text>
          </View>
          <Image
            source={require('./resources/img/alura.jpg')}
            style={styles.foto}
          />
        </View>
      )}
    />
  );
};

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
