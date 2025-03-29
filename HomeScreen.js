import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>¡Hola, Leonardo!</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        {/* Sección de Tarjetas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tarjetas</Text>
          <View style={styles.cardContainer}>
            {['Qrobus', 'SuSalud', 'Licencia', 'ID Digital'].map((card, index) => (
              <TouchableOpacity 
                key={index}
                style={styles.card}
                onPress={() => navigation.navigate('Card')}
              >
                <View style={styles.cardIcon}>
                  <Ionicons name="card" size={24} color="#2A7E8D" />
                </View>
                <Text style={styles.cardText}>{card}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Sección Mi Unidad */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mi unidad</Text>
          <View style={styles.listContainer}>
            {['Recibos', 'Documentos'].map((item, index) => (
              <TouchableOpacity 
                key={index}
                style={styles.listItem}
                onPress={() => item === 'Recibos' && navigation.navigate('Recipes')}
              >
                <Text style={styles.listItemText}>{item}</Text>
                <Ionicons name="chevron-forward" size={20} color="#999" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      
      {/* Barra de navegación inferior */}
      <View style={styles.tabBar}>
        {['home', 'wallet', 'notifications', 'profile'].map((icon, index) => (
          <TouchableOpacity key={index} style={styles.tab}>
            <Ionicons 
              name={icon} 
              size={24} 
              color={index === 0 ? '#2A7E8D' : '#999'} 
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#2A7E8D',
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
  },
  content: {
    padding: 20,
    paddingBottom: 80,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    backgroundColor: '#e6f4f7',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  listContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    padding: 10,
  },
});

export default HomeScreen;