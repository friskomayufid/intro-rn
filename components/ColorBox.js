import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ColorBox({ colorName, hexCode }) {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const textStyle = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.boxText, textStyle]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginBottom: 10,
    padding: 10,
  },
  boxText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
