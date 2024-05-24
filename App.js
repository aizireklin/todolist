import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = index => {
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text>Todo List:</Text>

      {todos.map((todo, index) => (
        <TouchableOpacity key={index} onPress={() => handleDeleteTodo(index)}>
          <Text>{todo}</Text>
        </TouchableOpacity>
      ))}

      <TextInput
        style={styles.input}
        value={newTodo}
        onChangeText={text => setNewTodo(text)}
        placeholder="Add todo..."
      />

      <TouchableOpacity onPress={handleAddTodo}>
        <Text>Add Todo</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
});
