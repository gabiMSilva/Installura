import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
} from 'react-native';

const Post = (props) => {
    return (
      <View>
        <View style={styles.cabecalho}>
          <Image
            source={require('../../resources/img/alura.jpg')}
            style={styles.fotoDePerfil}
            />
          <Text>{props.foto.usuario}</Text>
        </View>
        <Image
          source={require('../../resources/img/alura.jpg')}
          style={styles.foto}
          />
      </View>
    );
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
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

export default Post;
