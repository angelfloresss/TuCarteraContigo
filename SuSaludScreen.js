import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SuSaludScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarjeta de Salud Estatal</Text>
      
      <View style={styles.card}>
        <Text style={styles.header}>TU TARJETA</Text>
        <Text style={styles.subheader}>para acceso a</Text>
        <Text style={styles.subheaderBold}>SALUD ESTATAL</Text>
        
        <View style={styles.divider} />
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>NOMBRE:</Text>
          <Text style={styles.infoValue}>DIEGO</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>APELLIDO:</Text>
          <Text style={styles.infoValue}>ORTIZ ZAMUDIO</Text>
        </View>
        
        <View style={styles.divider} />
        
        <Text style={styles.curpLabel}>CURP:</Text>
        <Text style={styles.curpValue}>ODIT560295MOGXPES5</Text>
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
  header: {
    fontSize: 24,
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
  subheaderBold: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  curpLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  curpValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
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
    fontWeight: 'bold',
    flex: 1,
  },
});

export default SuSaludScreen;