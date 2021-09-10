
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableHighlight, TextInput } from 'react-native'

export default function App1() {

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [Resultado, setResultado] = useState(0)

  const calcImc = () => {
    if (peso == 0 || !peso) {
      alert('Informe o Peso')
      return
    }
    if (altura == 0 || !altura) {
      alert('Informe a Altura')
      return
    }
    const r = peso / (Math.pow(altura, 2))
    setResultado(r.toFixed(1))
  }


  return (
    <SafeAreaView sytle={estilos.corpo}>
      <View style={estilos.bloco}>
        <Text sytle={tablog.txtRst}>Calculadora de IMC</Text>
      </View>
      <View style={estilos.bloco}>
        <Text>Informe seu Peso:</Text>
        <TextInput
          style={estilos.txt}
          autoFocus={true}
          keyboardType={'numeric'}
          onChangeText={text => setPeso(text)}
        />
      </View>
      <View style={estilos.bloco}>
        <Text>Informe sua Altura</Text>
        <TextInput
          style={estilos.txt}
          autoFocus={false}
          keyboardType={'numeric'}
          onChangeText={text => setAltura(text)}
        />
      </View>
      <View>
        <TouchableHighlight style={estilos.btnCalc}
          onPress={() => calcImc()}>
          <Text style={estilos.txtCalc}>Calcular Imc</Text>
        </TouchableHighlight>
      </View >
      <View style={estilos.bloco}>
        <Text>Resultado:{Resultado}
        </Text>
      </View>
      <Image
        source={require('./assets/tabimc.png')}
        style={tablog.tabimc} />

    </SafeAreaView >

  )
}

const estilos = StyleSheet.create({
  corpo: {
    padding: 10,
  },
  bloco: {
    marginBottom: 20,
  },
  txt: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#e9edf4',
    borderColor: '#4f81bd'
  },
  btnCalc: {
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
  },
  txtCalc: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff'
  },


})

const tablog = StyleSheet.create({
  tabimc: {
    width: 360,
    height: 230,
    resizeMode: 'cover',

  },
})
