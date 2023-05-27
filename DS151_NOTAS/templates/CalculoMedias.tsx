import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydb.db');

const CalculoMedias = () => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Students (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, grade REAL)'
      );
    });
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Students', [], (_, { rows }) => {
        setStudents(rows._array);
      });
    });
  };

  const addStudent = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO Students (name, grade) VALUES (?, ?)', [name, parseFloat(grade)], (_, { insertId }) => {
        fetchStudents();
        setName('');
        setGrade('');
      });
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do aluno"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Média"
        keyboardType="numeric"
        value={grade}
        onChangeText={text => setGrade(text)}
      />
      <Button title="Adicionar" onPress={addStudent} />
      <Text style={styles.title}>Registros:</Text>
      <FlatList
        data={students}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.id}</Text>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.grade}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
  },
});

export default CalculoMedias;
