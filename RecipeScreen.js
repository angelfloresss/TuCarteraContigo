import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RecipeScreen = ({ route, navigation }) => {
  const { recipe } = route.params || {};
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{recipe?.title || 'CFE'}</Text>
          <Text style={styles.subtitle}>Comprobante de pago por internet</Text>
        </View>
        
        <View style={styles.amountContainer}>
          <Text style={styles.amountLabel}>Monto</Text>
          <Text style={styles.amount}>$2,367.00</Text>
        </View>
        
        <View style={styles.detailsContainer}>
          {[
            { label: 'Referencia', value: 'T202006-376971200961' },
            { label: 'Número de identificación', value: '23317002' },
            { label: 'Fecha y hora del pago', value: '2020-07-10 15:29:44.60' },
            { label: 'Nombre del cliente', value: 'LORENZO VALLE GOMEZ' },
            { label: 'Número de servicio (RPI)', value: '274271200961' },
            { label: 'Medio de pago', value: 'App CFE Contigo' },
          ].map((detail, index) => (
            <View key={index} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{detail.label}</Text>
              <Text style={styles.detailValue}>{detail.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      
      <TouchableOpacity 
        style={styles.shareButton}
        onPress={() => navigation.navigate('Share')}
      >
        <Ionicons name="share-social" size={24} color="white" />
        <Text style={styles.shareButtonText}>Compartir recibo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2A7E8D',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  amountContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  amountLabel: {
    fontSize: 16,
    color: '#666',
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2A7E8D',
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  detailRow: {
    marginBottom: 15,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  shareButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#2A7E8D',
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  shareButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default RecipeScreen;