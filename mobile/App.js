import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, SafeAreaView, View } from 'react-native';
import api from './src/services/api'

import Init from './src';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    })
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>

        <FlatList 
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({item}) => (
            <Text style={styles.title}>{item.title}</Text>
          )}
        />
      </SafeAreaView>
    {/* <View style={styles.container}>
      <Text style={styles.tittle}>Hello World!</Text>
       <Text>This is my projects:</Text>
       {projects.map(project => (
        <Text key={project.id} style={styles.tittle}>{project.title}</Text>
      ))}
      <Init text='Teste' />
      <StatusBar style="light" />
    </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
});
