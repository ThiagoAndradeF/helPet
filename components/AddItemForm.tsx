import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

interface Item {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

interface AddItemFormProps {
  onAddItem: (item: Item) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItem }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    if (!title || !description || !imageUrl || !price) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newItem: Item = {
      id: Math.random().toString(36).substring(7), // gera um ID simples
      title,
      description,
      imageUrl,
      price,
    };

    onAddItem(newItem);
    setTitle('');
    setDescription('');
    setImageUrl('');
    setPrice('');
    Alert.alert('Success', 'Item added successfully');
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
      />
      <TextInput
        style={styles.input}
        value={imageUrl}
        onChangeText={setImageUrl}
        placeholder="Image URL"
      />
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Price"
        keyboardType="numeric"
      />
      <Button title="Add Item" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
  },
});

export default AddItemForm;
