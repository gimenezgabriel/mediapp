import {Button, Modal as NewModal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Modal = ({modalVisible, onHandleDelete, onHandleDismiss}) => {
  return (
        <NewModal visible={modalVisible} animationType="slide" transparent={true}>
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.modalTitle}>
          <Text>Borrar paciente</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text>¿Estas seguro de eliminar?</Text>
        </View>
        <View style={styles.modalButton}>
          <Button title="Confirmar" color={'#205953'} onPress={onHandleDelete} style={styles.button}/>
          <Button title="Cancelar" color={'#FF0000'} onPress={onHandleDismiss} style={styles.button}/>
        </View>
      </View>
    </View>
  </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
    modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#ecf7f6',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 18,
    color: '#0d2421'
  },
  modalMessage: {
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',

  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    color:'#205953',
  },
button: {
  marginHorizontal: 5,
  width: 50,
}
})