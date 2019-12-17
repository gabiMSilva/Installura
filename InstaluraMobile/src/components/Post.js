import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {
  
  constructor(props) {
    super(props);
    this.state = { foto: this.props.foto }
  }

  like(){
    const { foto } = this.state;
    let curtidas = [];

    if(!foto.likeada){
      curtidas = [
        ...foto.likers,
        {login: 'meuUsuario'}
      ];
    } else {
      curtidas = foto.likers.filter(liker => {
        return liker.login !== 'meuUsuario';
      })
    }

    const fotoAtualizada = {
      ...foto,
      likeada: !foto.likeada,
      likers: curtidas
    };
  
    this.setState({foto: fotoAtualizada});
  }

  carregaIcone(likeada){
    return likeada ? require('../../resources/img/s2-checked.png') : require('../../resources/img/s2.png');
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

  exibeLikes(likers) {
    if(likers.length <= 0)
      return;  
    return (<Text style={styles.likes}>{likers.length} {likers.length > 1 ? 'curtidas': 'curtida'}</Text>);
  }

  render() {
    const { foto } = this.state;

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
          <TouchableOpacity onPress={this.like.bind(this)}>
            <Image style={styles.botaoDeLike} source={this.carregaIcone(foto.likeada)} />
          </TouchableOpacity>
          {this.exibeLikes(foto.likers)}
          {this.exibeLegenda(foto)}
          {foto.comentarios.map(comentario => 
            <View style={styles.comentario} key={comentario.id}>
              <Text style={styles.tituloComentario}>{comentario.login}</Text>
              <Text>{comentario.texto}</Text>
            </View>
          )}
          <View style={styles.novoComentario}>
            <TextInput style={styles.input} placeholder="Adicione um comentário..." underlineColorAndroid='transparent'/>
            <Image style={styles.icone} source={ require('../../resources/img/send.png') } />
          </View>
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

  botaoDeLike: {
    width: 27,
    height: 27,
    marginBottom: 7
  },

  rodape: {
    margin: 10
  },

  likes: {
    fontWeight: 'bold',
    marginBottom: 7
  },

  comentario: {
    flexDirection: 'row',
  },

  tituloComentario: {
    fontWeight: 'bold',
    marginRight: 5
  },

  input: {
    flex: 1,
    height: 40
  },

  novoComentario: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  icone: {
    width: 25,
    height: 25
  }
});