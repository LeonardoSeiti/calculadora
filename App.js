import { TextInput, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

function App() {
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0");

  function somar(){
   let soma = parseInt(num1) + parseInt(num2);
   console.log("Soma: ", soma);
   alert("Soma: " + soma)
  }
  function resultado(){
    alert("Resultado: " + soma)
  }

  return(
    <View style= {{position: "absolute",
    top: 250,
    right: 800,
    left: 800,
    backgroundColor: "lightgreen",
    padding: 200,
    }}>
    
      <Text>Digite o 1º numero </Text>
      <TextInput style={{backgroundColor: "yellow"}} value={num1} onChangeText={setNum1}/>
      <Text>Digite o 2º numero </Text>
      <TextInput style={{backgroundColor: "purple"}} value={num2} onChangeText={setNum2}/>
      <Button title='Somar' onPress={somar}/>
      <Text>Resultado:  </Text>
      

    </View>
  );
}

export default App;