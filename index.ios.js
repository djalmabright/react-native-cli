/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default class Native extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      id: 0,
      list: [],
    }
  }

  _onChangeText = (text) => {
    this.setState({ text });
  }

  _onPress = () => {
    const {
      list,
      text,
      id
    } = this.state;
    const _list = list.concat();
    _list.push({ key:id, text:text, done:false });

    this.setState({
      text: '',
      list: _list,
      id: id + 1
    });
  }

  _onPressItem = (index) => () => {
    const {
      list,
    } = this.state;
    const _list = list.concat();

    _list[index].done = !_list[index].done
    this.setState({
      list: _list,
    });
  }

  render() {
    const {
      list,
      text,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            onChangeText={this._onChangeText}
            underlineColorAndroid="transparent"
            value={text}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
          >
            <Text style={styles.buttonText} >Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={list}
          renderItem={props => (
            <TouchableOpacity onPress={this._onPressItem(props.index)}>
              <Text style={props.item.done ? styles.itemTextDone : styles.itemText}>
                {props.item.text}
              </Text>
            </TouchableOpacity>)}
          style={styles.list}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputArea: {
    flexDirection: 'row',
    marginTop: 64,
  },
  input: {
    height: 30,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#008080',
    marginRight: 20,
  },
  button: {
    width: 80,
    height: 40,
    backgroundColor: '#006060',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  list: {
    width: 300,
  },
  itemText: {
    fontSize: 22,
    margin: 10,
  },
  itemTextDone: {
    fontSize: 22,
    margin: 10,
    textDecorationLine: 'line-through',
    color: '#DDD',
  }
});

AppRegistry.registerComponent('Native', () => Native);
