import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, TouchableOpacity, Image } from 'react-native';
import {styleFormat} from './css/styles';
import {MaterialIcons} from '@expo/vector-icons'


export default function App() {
  return (
    <View style={styleFormat.container}>

      <Image source={{uri:"https://i.pinimg.com/originals/8d/78/75/8d787538cd86e9aeaa510e0be50fa11a.png"}} style={styleFormat.logo}/>

      <View style={styleFormat.btnApp}>
        <TouchableOpacity  style={styleFormat.btn}>
          <MaterialIcons name="login" size={24} color="black" />
          <Text> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styleFormat.btn}>
          <MaterialIcons name="person-add" size={24} color="black" />
          <Text> Cadastro </Text>
        </TouchableOpacity>


      </View>

      <StatusBar style="auto"/>

    </View>

  );
}

