import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App({ navigation }) {
  const [numbers, setNumbers] = useState([0]);
  const addNumber = (numero) => {
    const ultimoValor = numbers[numbers.length - 1];
    if ((numero === "/" || numero === "*" || numero === "-" || numero === "+" || numero === ".") &&
      (ultimoValor === "/" || ultimoValor === "*" || ultimoValor === "-" || ultimoValor === "+" || ultimoValor === ".")) {
      return;
    } else if (numbers.length < 9) {
      if ((numbers[0] === 0) && (numero !== ".") && (numbers[1] !== "." && numbers[1] !== "/" && numbers[1] !== "*" && numbers[1] !== "-" && numbers[1] !== "+") && (numero !== "/" && numero !== "*" && numero !== "-" && numero !== "+")) {
        setNumbers([numero]);
      } else {
        setNumbers([...numbers, numero]);
      }
    }
  };
  const remNumber = () => {
    setNumbers(numbers.slice(0, -1));
    if (numbers.length < 2) {
      setNumbers([0]);
    }
  };
  const clearList = () => {
    setNumbers([0]);
  };
  
  const numerosConcatenados = numbers.join('');
  const resultado = () => {
    const ultimoValor = numbers[numbers.length - 1];
    if (ultimoValor === "/" || ultimoValor === "*" || ultimoValor === "-" || ultimoValor === "+" || ultimoValor === ".") {
      return;
    } else {
      let resultadoo = eval(numerosConcatenados);
      resultadoo = parseFloat(resultadoo.toFixed(8));
      setNumbers([resultadoo]);
      const numerosExtraidos = extrairComponentes();
      const { primeiroNumero, operacao, segundoNumero } = numerosExtraidos;
      navigation.navigate('Detalhes', {
        primeiroNumero: primeiroNumero,
        operacao: operacao,
        segundoNumero: segundoNumero,
        resultado: resultadoo,
      });
    }
  };
  
  const extrairComponentes = () => {
  const regex = /(\d+\.?\d*)([+\-*/])(\d+\.?\d*)/;
  const match = numerosConcatenados.match(regex);
  if (match) {
    return {
      primeiroNumero: match[1],
      operacao: match[2],
      segundoNumero: match[3]
    };
  }
  return { primeiroNumero: null, operacao: null, segundoNumero: null };
};
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.tela}>
      <View style={styles.conteudoTela}>
        <Text style={styles.resultado}>{numbers}</Text>
      </View>
    </View>
    <View style={styles.teclas}>
      <TouchableOpacity onPress={clearList} style={[styles.tecla, styles.teclasEspeciais1]}>
        <Text style={styles.textTecla}>AC</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber(7)} style={styles.tecla}>
        <Text style={styles.textTecla}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber(4)} style={styles.tecla}>
        <Text style={styles.textTecla}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber(1)} style={styles.tecla}>
        <Text style={styles.textTecla}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tecla, {backgroundColor: "black"}]}>
        {/* <MaterialIcons style={styles.textTecla} name="backspace"/> */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => remNumber()} style={[styles.tecla, styles.teclasEspeciais1]}>
        <MaterialIcons style={styles.textTecla} name="backspace"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber(8)} style={styles.tecla}>
        <Text style={styles.textTecla}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber(5)} style={styles.tecla}>
        <Text style={styles.textTecla}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber(2)} style={styles.tecla}>
        <Text style={styles.textTecla}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber(0)} style={styles.tecla}>
        <Text style={styles.textTecla}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber(".")} style={[styles.tecla, styles.teclasEspeciais1]}>
        <Text style={styles.textTecla}>,</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber(9)} style={styles.tecla}>
        <Text style={styles.textTecla}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber(6)} style={styles.tecla}>
        <Text style={styles.textTecla}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber(3)} style={styles.tecla}>
        <Text style={styles.textTecla}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tecla, {backgroundColor: "black"}]}>
        {/* <Text style={styles.textTecla}>,</Text> */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber("/")} style={[styles.tecla, styles.teclasEspeciais2]}>
        <Text style={styles.textTecla}>÷</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber("*")} style={[styles.tecla, styles.teclasEspeciais2]}>
        <Text style={styles.textTecla}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber("-")} style={[styles.tecla, styles.teclasEspeciais2]}>
        <Text style={styles.textTecla}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addNumber("+")} style={[styles.tecla, styles.teclasEspeciais2]}>
        <Text style={styles.textTecla}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {resultado()}} style={[styles.tecla, styles.teclasEspeciais2]}>
        <Text style={styles.textTecla}>=</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}
const { width } = Dimensions.get('window');
const size = width * 0.25
const styles = StyleSheet.create({
  tela: {
    backgroundColor: "black",
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  conteudoTela: {
    position: "absolute",
    bottom: "5%",
    right: "5%"
  },
  resultado: {
    justifyContent: "row",
    fontSize: "60%",
    color: "white",
    
  },
  teclas: {
    backgroundColor: "black",
    width: "100%",
    height: "60%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
  tecla: {
    margin: "1.2%",
    width: size-10,
    height: size-10,
    borderRadius: 50,
    backgroundColor: "#363636",
    justifyContent: "center",
    alignItems: "center",
  },
  textTecla: {
    fontSize: "30%",
    color: "white",
    fontWeight: "bold",
  },
  teclasEspeciais1: {
    backgroundColor: "#808080"
  },
  teclasEspeciais2: {
    backgroundColor: "orange"
  }
  }
);
