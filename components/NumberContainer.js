import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../constants/colors';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.secondary,
    padding: 10,
    marginHorizontal: 'auto',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: colors.secondary,
    fontSize: 22
  }
});

export default NumberContainer;