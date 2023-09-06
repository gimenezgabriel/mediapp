import React, { useState } from "react";
import {
  Button,
  TextInput,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Modal from "./components/Modal";
import Icon from 'react-native-vector-icons/FontAwesome'
export default function App() {
  const [textValue, setTextValue] = useState('');
  const [itemsList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = React.useState(false);

  const onHandleChangeItem = text => setTextValue(text);

  const addItem = () => {
    if(textValue === '') {
      return
    }
    setItemList(prevState => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ]);
    setTextValue('');
  };

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.itemContainer} 
      onPress={() => onHandleModal(index)}
      >

      <Text style={styles.textItem}>{item.value}</Text>
      <Text style={styles.buttonItem}><Icon name="trash" size={20} color='#ffffff' /></Text>
    </TouchableOpacity>
  );

  const onHandleDelete = () => {
      console.log(itemSelected)
      let arr = itemsList
      arr.splice(itemSelected, 1)
      setItemList(arr)
      setModalVisible(false)
  };

  const onHandleDismiss = () => {
    setModalVisible(false)
  }

  const onHandleModal = index => {
    setModalVisible(true)
    setItemSelected(index)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pacientes </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Item"
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button 
        style={styles.buttonBar}
        title="+ ADD" color={'#2aa99f'}
        onPress={addItem}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={itemsList}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} onHandleDismiss={onHandleDismiss}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#505052',
  },
  inputContainer: {
  flexDirection: 'row', 
  alignItems: 'center', 
  height: 50,
  borderRadius: 10,
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#505052',
  justifyContent: 'space-between',
  },
  input: {
    width: 200,
    height: 50,
    fontSize: 17,
    paddingLeft: 8,
  },
  listContainer: {
    marginTop: 8,
  },
  itemContainer: {
    height: 40,
    marginVertical: 4,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2aa99f',
    shadowColor: '#2aa99f',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  textItem: {
    fontSize: 20,
    paddingLeft: 5,
    color: '#ffffff',
    fontWeight: '600',
    fontVariant: 'no-common-ligatures',
  },
  buttonItem: {
    paddingRight: 15,
  },
  buttonBar:{
    height: 50,
  }
})

