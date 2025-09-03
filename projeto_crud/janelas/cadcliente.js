import {SafeAreaView,Text,TextInput,TouchableOpacity,ScrollView} from 'react-native';

import {useState} from 'react';


import { MaterialCommunityIcons } 
from '@expo/vector-icons';

import mascara from '../css/estilo';

import Firebase from '../factory/firebase';

export default function CadCliente(){
  const[nome,setNome]=useState('');
  const[email,setEmail]=useState('');
  const[idade,setIdade]=useState('');

  function InserirCliente(){
    Firebase.firestore().collection('tbcliente').add({
      nome:nome,
      idade:idade,
      email:email,
    })
    setNome('');
    setIdade('');
    setEmail('');
    alert("Dados cadastrados com sucesso!");
  }

  return(
    <SafeAreaView style={mascara.fundo}>
       <ScrollView vertical>
     

           <Text style={mascara.titulos}>Cadastro de Cliente</Text>

            <TouchableOpacity style={mascara.btn} onPress={InserirCliente}>
                  <MaterialCommunityIcons 
                  name="floppy"
                  color={color='#000'}
                  size={size=30} 
                  />
            </TouchableOpacity>

           <TextInput style={mascara.input} placeholder="Digite o nome do cliente" value={nome} onChangeText={setNome}/>
           <TextInput style={mascara.input} placeholder="Digite a idade do cliente"value={idade} onChangeText={setIdade}/>
           <TextInput style={mascara.input} placeholder="Digire o E-mail do cliente"value={email} onChangeText={setEmail}/>
           

           
    </ScrollView>
    </SafeAreaView>
  )
}
