import React, {useState} from 'react';
import {View,StyleSheet,Button,ActivityIndicator,Modal,Text,Pressable} from 'react-native';

const ActInd = () => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const actloading = () => {setLoading(true); 
    setTimeout(() => {setLoading(false);setModalVisible(true);}, 3000);};
    
  return (
<View style={styles.modalBox}>
    <View style={styles.container}>

        {loading ? (<ActivityIndicator visible={loading}/>) : (
        <Button title="Total Balance" onPress={actloading}></Button>)}

    </View>

    <View >

        <Modal animationType="fade" transparent={true} visible={modalVisible} >
            <View style={styles.modalView}>
              <Text style={styles.modalText}> Your balance is : $99,987,234 </Text>

                  <Pressable  style={[styles.button, styles.buttonClose]} 
                  onPress={() => {setModalVisible(false);}}>

                  <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
            </View>
       </Modal>

    </View>

</View>

  );
};

const styles = StyleSheet.create({
  container: {
    height:37,
    backgroundColor: '#ecf0f1',
    justifyContent:'center'
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  modalBox:{
    width: 365,
    marginTop:20,
    marginLeft:11,
  },
  modalView: {
    margin: 20,
    height:200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    },
  button: {
      borderRadius: 20,
      padding: 10,
    },
  buttonOpen: {
      backgroundColor: "#000",  
    },
  buttonClose: {
      backgroundColor: "#2196F3",
      },
  textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
      },
  modalText: {
      marginBottom: 15,
      textAlign: "center",
      color:'black',
      fontSize:24,
  },
});

export default ActInd;