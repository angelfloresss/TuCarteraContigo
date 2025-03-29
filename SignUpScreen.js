import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crea tu cuenta</Text>
      
      {['Usuario', 'Correo electrónico', 'Contraseña', 'Confirmar contraseña', 'Teléfono', 'CURP'].map((field, index) => (
        <View key={index} style={styles.inputWrapper}>
          <Text style={styles.label}>{field}</Text>
          <TextInput
            style={styles.input}
            placeholder={`Ingresa tu ${field.toLowerCase()}`}
            placeholderTextColor="#999"
            secureTextEntry={field.includes('Contraseña')}
          />
        </View>
      ))}
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Crear cuenta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2A7E8D',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2D46FF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;