import {SafeAreaView,Text} from 'react-native';

import mascara from '../css/estilo';

export default function CadProduto(){
  return(
    <SafeAreaView style={mascara.fundo}>
           <Text style={mascara.titulos}>Cadastro de Produto</Text>
    </SafeAreaView>
  )
}
