import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    if (isFocused) {
      setUsername('');
      setPassword('');
      setErrorMessage('');
    }
  }, [isFocused]);

  const handleLogin = async () => {
    try {
      // Validar campos no vacíos
      if (!username || !password) {
        setErrorMessage('Por favor ingresa usuario y contraseña');
        setIsLoading(false);
        return;
      }

      // Buscar usuario en la API
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();

      // Buscar coincidencia por username o email
      const userFound = users.find(user => 
        user.username.toLowerCase() === username.toLowerCase() || 
        user.email.toLowerCase() === username.toLowerCase()
      );

      if (!userFound) {
        setErrorMessage('Usuario y/o contraseña incorrecto(s)');
        setIsLoading(false);
        return;
      }

      // Validar que la contraseña sea "password"
      if (password !== 'password') {
        setErrorMessage('Usuario y/o contraseña incorrecto(s)');
        setIsLoading(false);
        return;
      }

      // Guardar usuario y navegar al Home
      await AsyncStorage.setItem('currentUser', JSON.stringify(userFound));
      navigation.replace('Home');
    } catch (error) {
      console.error('Error al guardar el nombre de usuario:', error);
      setErrorMessage('Ocurrió un error al iniciar sesión');
    }
  };

  const navigateToSignUp = () => {
    setUsername('');
    setPassword('');
    setErrorMessage('');
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.mainContainer}>
      {/* Parte superior con gradiente azul */}
      <LinearGradient 
        colors={['#2D46FF', '#2D46FF']} 
        style={styles.gradientContainer}
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 0}}
      >
        <StatusBar barStyle="light-content" backgroundColor="#2D46FF" />
        
        <View style={styles.headerContent}>
          <View style={styles.iconContainer}>
            <Icon name="wallet-outline" size={80} color="#fff" />
          </View>
          <Text style={styles.title}>TuCartera Contigo</Text>
        </View>
      </LinearGradient>

      {/* Parte inferior blanca */}
      <View style={styles.bottomContainer}>
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
            onChangeText={setUsername}
          />

          <Text style={styles.label}>Contraseña</Text>
          <View style={styles.passwordContainer}>
            <TextInput 
              style={styles.passwordInput} 
              secureTextEntry={secureEntry}
              placeholder="Ingresa tu contraseña" 
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
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

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton} onPress={navigateToSignUp}>
            <Text style={styles.signUpText}>¿No tienes cuenta? Crear cuenta</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>Todo a tu alcance, en cualquier momento</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  gradientContainer: {
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  headerContent: {
    alignItems: 'center',
  },
  logo: {
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 25,
    marginHorizontal: 20,
    marginTop: -70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
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
    marginLeft: 8,
    fontSize: 14,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 15,
    backgroundColor: '#F9F9F9',
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  passwordInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    paddingRight: 50,
    backgroundColor: '#F9F9F9',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  button: {
    backgroundColor: '#2D46FF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpButton: {
    alignItems: 'center',
    marginTop: 15,
  },
  signUpText: {
    color: '#2D46FF',
    fontSize: 14,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
    fontSize: 12,
  },
});

export default LoginScreen;