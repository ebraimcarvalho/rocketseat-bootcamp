import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Init({text}) {
  return (
    <View>
      <Text>Hello World! This is a {text}</Text>
      <Text style={styles.container}>Texto 2</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
  }
})