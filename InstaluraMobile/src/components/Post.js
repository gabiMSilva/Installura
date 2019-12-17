import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
} from 'react-native';

import InputComentario from './InputComentario';
import Likes from './Likes';

const width = Dimensions.get('screen').width;

export default class Post extends Component {
  
  constructor(props) {
    super(props);
  }

  exibeLegenda(foto) {
    if(foto.comentario == ''){
      return;
    }

    return (
      <View style={styles.comentario}>
        <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
        <Text>{foto.comentario}</Text>
      </View>
    );
  }

  adicionaComentario(valorComentario, inputComentario) {
    if(valorComentario === '')
      return;

    const novaLista = [...this.state.foto.comentarios, {
      id: valorComentario,
      login: 'meuUsuario',
      texto: valorComentario
    }];

    const fotoAtualizada = {
      ...this.state.foto,
      comentarios: novaLista
    }

    this.setState({foto: fotoAtualizada, valorComentario: ''});
    inputComentario.clear();
  }

  render() {
    const { foto, likeCallback } = this.props;

    return (
      <View>
        <View style={styles.cabecalho}>
          <Image 
              source={{uri: foto.urlPerfil}}
              style={styles.fotoDePerfil}
          />
          <Text>{foto.loginUsuario}</Text>
        </View>
        <Image 
            source={{uri: foto.urlFoto}}
            style={styles.foto}
        />
        <View style={styles.rodape}>          
          <Likes 
            foto={foto} 
            likeCallback={likeCallback}
          />
          {this.exibeLegenda(foto)}
          {foto.comentarios.map(comentario => 
            <View style={styles.comentario} key={comentario.id}>
              <Text style={styles.tituloComentario}>{comentario.login}</Text>
              <Text>{comentario.texto}</Text>
            </View>
          )}
          <InputComentario comentarioCallback={this.adicionaComentario.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    margin: 10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },

  fotoDePerfil: {
    marginRight: 10, 
    borderRadius: 20, 
    width: 30, 
    height: 30
  },

  foto: {
    width: width,
    height: width
  },

  rodape: {
    margin: 10
  },

  comentario: {
    flexDirection: 'row',
  },

  tituloComentario: {
    fontWeight: 'bold',
    marginRight: 5
  },
});