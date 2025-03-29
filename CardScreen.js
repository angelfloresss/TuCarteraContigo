import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardName}>Nombre Tarjeta</Text>
        <Text style={styles.cardNumber}>1246 3313 5620</Text>
        
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Saldo Disponible</Text>
          <Text style={styles.balanceAmount}>$100.00</Text>
        </View>
      </View>
      
      <View style={styles.actions}>
        {[
          { icon: 'add-circle', label: 'Recarga' },
          { icon: 'gift', label: 'Bonos' },
          { icon: 'lock-closed', label: 'Bloqueo' }
        ].map((action, index) => (
          <TouchableOpacity key={index} style={styles.actionButton}>
            <Ionicons name={action.icon} size={28} color="#2A7E8D" />
            <Text style={styles.actionLabel}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>Eliminar tarjeta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  time: {
    fontSize: 16,
    color: '#666',
  },
  card: {
    backgroundColor: '#2A7E8D',
    borderRadius: 15,
    padding: 25,
    marginBottom: 30,
    elevation: 5,
  },
  cardName: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 5,
  },
  cardNumber: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 30,
  },
  balanceContainer: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
    paddingTop: 15,
  },
  balanceLabel: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  balanceAmount: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  actionButton: {
    alignItems: 'center',
    width: '30%',
  },
  actionLabel: {
    marginTop: 8,
    color: '#666',
    fontSize: 14,
  },
  deleteButton: {
    alignItems: 'center',
    padding: 15,
  },
  deleteText: {
    color: 'red',
    fontSize: 16,
  },
});

export default CardScreen;