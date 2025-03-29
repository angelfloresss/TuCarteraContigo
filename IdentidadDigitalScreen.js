import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const IdentidadDigitalScreen = () => {
  return (
    <ScrollView 
      style={styles.scrollContainer}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>Credencial para Votar</Text>
      
      <View style={styles.card}>
        <Text style={styles.header}>MÉXICO</Text>
        <Text style={styles.subheader}>IDENTIDAD DIGITAL</Text>
        
        <View style={styles.divider} />
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>NOMBRE:</Text>
          <Text style={styles.infoValue}>DIEGO ORTIZ ZAMUDIO</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>DOMICILIO:</Text>
          <Text style={styles.infoValue}>VIADUCTO TLALPAN NO. 100</Text>
          <Text style={styles.infoValue}>COL. ARENAL TEPEPAN, ALCALDIA TLALPAN.</Text>
          <Text style={styles.infoValue}>C.P. 14610, QUERETARO.</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>CLAVE DE ELECTOR:</Text>
          <Text style={styles.infoValue}>DOZAMR80070501M100</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>CURP:</Text>
          <Text style={styles.infoValue}>DOZA800705MCLMLR01</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>FECHA DE NACIMIENTO:</Text>
          <Text style={styles.infoValue}>11/09/2002</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>SEXO:</Text>
          <Text style={styles.infoValue}>M</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>AÑO DE REGISTRO:</Text>
          <Text style={styles.infoValue}>2020-02</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>VIGENCIA:</Text>
          <Text style={styles.infoValue}>2020 - 2029</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 20,
    paddingBottom: 40, // Espacio adicional al final para mejor scroll
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20, // Espacio adicional debajo de la tarjeta
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 15,
  },
  infoRow: {
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
  },
});

export default IdentidadDigitalScreen;