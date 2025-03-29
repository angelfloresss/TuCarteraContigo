import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMessage('Por favor ingresa usuario y contraseña');
      return;
    }

    try {
      // Aquí iría tu lógica de autenticación real
      // Por ahora solo guardamos el usuario en AsyncStorage
      await AsyncStorage.setItem('username', username);
      navigation.replace('Home');
    } catch (error) {
      console.error('Error al guardar el nombre de usuario:', error);
      setErrorMessage('Ocurrió un error al iniciar sesión');
    }
  };

  return (
    <LinearGradient 
      colors={['#2D46FF', '#1A2FAB']} 
      style={styles.container}
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 1}}
    >
      <StatusBar barStyle="light-content" backgroundColor="#2D46FF" />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          {/* Icono */}
          <View style={styles.iconContainer}>
            <Icon name="wallet-outline" size={80} color="#fff" />
          </View>

          <Text style={styles.title}>TuCartera Contigo</Text>

          <View style={styles.formContainer}>
            {errorMessage ? (
              <View style={styles.errorContainer}>
                <Icon name="warning-outline" size={20} color="#ff4444" />
                <Text style={styles.errorText}>{errorMessage}</Text>
              </View>
            ) : null}

            <Text style={styles.label}>Usuario o correo</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Ingresa tu usuario o email" 
              placeholderTextColor="#aaa"
              value={username}
              onChangeText={(text) => {
                setUsername(text);
                setErrorMessage('');
              }}
              autoCapitalize="none"
            />

            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.passwordContainer}>
              <TextInput 
                style={styles.passwordInput} 
                secureTextEntry={secureEntry}
                placeholder="Ingresa tu contraseña" 
                placeholderTextColor="#aaa"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setErrorMessage('');
                }}
              />
              <TouchableOpacity 
                style={styles.eyeIcon}
                onPress={() => setSecureEntry(!secureEntry)}
              >
                <Icon 
                  name={secureEntry ? 'eye-off-outline' : 'eye-outline'} 
                  size={20} 
                  color="#aaa" 
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              style={styles.button}
              onPress={handleLogin}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotButton}>
              <Text style={styles.forgotText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      <Text style={styles.footerText}>Todo a tu alcance, en cualquier momento</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 30,
    paddingHorizontal: 25,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffeeee',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  errorText: {
    color: '#ff4444',
    marginLeft: 5,
    fontSize: 14,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    height: 45,
    borderColor: '#2D46FF',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 20,
    paddingLeft: 15,
    color: '#000',
    backgroundColor: '#f9f9f9',
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  passwordInput: {
    height: 45,
    borderColor: '#2D46FF',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 15,
    color: '#000',
    backgroundColor: '#f9f9f9',
    paddingRight: 45,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
  button: {
    backgroundColor: '#2D46FF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#2D46FF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotButton: {
    alignSelf: 'center',
    marginTop: 15,
  },
  forgotText: {
    color: '#2D46FF',
    fontSize: 14,
  },
  footerText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
  }
});

export default LoginScreen;