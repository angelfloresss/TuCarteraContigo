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
        <Text style={styles.cardName}>Qrobus</Text>
        <Text style={styles.cardType}>Tipo de tarjeta: General</Text>
        <Text style={styles.cardNumber}>12463313562</Text>
        
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Saldo:</Text>
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
            <Ionicons name={action.icon} size={28} color="#00A8A8" />
            <Text style={styles.actionLabel}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Fondo blanco puro
    padding: 20,
  },
  header: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  time: {
    fontSize: 16,
    color: '#000000', // Negro puro
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#00A8A8', // Verde azulado más vibrante
    borderRadius: 15,
    padding: 25,
    marginBottom: 30,
    elevation: 5,
  },
  cardName: {
    fontSize: 20,
    color: 'white',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  cardType: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)', // Blanco con muy poca transparencia
    marginBottom: 20,
  },
  cardNumber: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30,
    letterSpacing: 0.5,
  },
  balanceContainer: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.4)', // Borde más visible
    paddingTop: 15,
  },
  balanceLabel: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)', // Blanco casi sólido
  },
  balanceAmount: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  actionButton: {
    alignItems: 'center',
    width: '30%',
  },
  actionLabel: {
    marginTop: 8,
    color: '#00A8A8', // Mismo color que la tarjeta
    fontSize: 15,
    fontWeight: '600',
  },
  deleteButton: {
    alignItems: 'center',
    padding: 15,
  },
  deleteText: {
    color: '#FF3B30', // Rojo brillante
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CardScreen;