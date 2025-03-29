import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const LicenciaScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Licencia</Text>
      
      <View style={styles.card}>
        <Text style={styles.curpLabel}>Numero de Licencia:</Text>
        <Text style={styles.curpValue}>OIZD02</Text>
        
        <View style={styles.divider} />
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nombre:</Text>
          <Text style={styles.infoValue}>Diego Ortiz Zamudio</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Fecha de nac:</Text>
          <Text style={styles.infoValue}>11/09/2002</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Vigencia:</Text>
          <Text style={styles.infoValue}>2020/2024</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Folio:</Text>
          <Text style={styles.infoValue}>201991023</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
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
  },
  curpLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  curpValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 15,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
    width: 120,
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
    flex: 1,
  },
});

export default LicenciaScreen;