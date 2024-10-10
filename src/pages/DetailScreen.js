import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { primeiroNumero, operacao, segundoNumero, resultado } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Valor 1: {primeiroNumero}</Text>
      <Text style={styles.texto}>Valor 2: {segundoNumero}</Text>
      <Text style={styles.texto}>Operacao: {operacao}</Text>
      <Text style={styles.texto}>Resultado: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: "white",
    fontSize: 30
  }
});
