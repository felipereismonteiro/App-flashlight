import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Image ,TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake'

const App = () =>{
  let [toggle, setToggle] = useState(false);

  let handleChangeToggle = () =>{setToggle(oldToggle => !oldToggle)}//basicamente ele começa em false e dps ele vai pra true quando precionar a tela
  
  useEffect(()=>{
    //liga flash do celular
    Torch.switchState(toggle)// basicamente quando acontece algum efeito no estado ele aciona
  },[toggle]) //isso aqui é pra ver qual dependencia vc trocou, qual estado vc trocou 

  useEffect(()=>{
    const subs = RNShake.addListener(()=>{  
      //quando o celular for chacoalhado rodaremos o toggle
      setToggle(oldToggle => !oldToggle)

      //essa func vai ser chamada quando o componente for demontado 
      return subs.remove();
    })
  },[toggle])


  return(//ele pergunta se o toggle é true se for é a primeira opção senao funciona oq ta depois do :

      <View style={toggle ? style.containerLight : style.container}>
        <TouchableOpacity onPress={handleChangeToggle}>
          <Image style={toggle ? style.lightinOn : style.lightinOff} source={
            toggle 
            ? require('../icons/eco-light.png') 
            : require('../icons/eco-light-off.png') 
          }>
          </Image> 
          <Image style={toggle ? style.imageOn : style.imageOff} source={
            toggle 
            ? require('../icons/logo-dio.png') 
            : require('../icons/logo-dio-white.png') 
          }>
          </Image>   
        </TouchableOpacity>
      </View>

  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightinOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightinOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  imageOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 300,
    height: 150,
    marginTop: 60,
  },
  imageOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 300,
    lightinOn: 'white',
    height: 150,
    marginTop: 60,
  },

})

export default App;