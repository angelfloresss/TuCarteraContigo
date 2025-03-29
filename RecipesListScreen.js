import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const recipesData = [
  {
    id: '1',
    title: 'CFE',
    amount: '$299',
    date: '12/03/25',
    service: 'Pago de servicio',
    type: 'electricidad'
  },
  {
    id: '2',
    title: 'Tenencia',
    amount: '$1,245',
    date: '28/02/25',
    service: 'RECAUDANET',
    type: 'vehicular'
  },
  {
    id: '3',
    title: 'Predial',
    amount: '$2,899',
    date: '17/02/25',
    service: 'Impuesto',
    type: 'propiedad'
  },
  {
    id: '4',
    title: 'Declaración anual',
    amount: '$0',
    date: '04/01/25',
    service: 'SAT',
    type: 'impuestos'
  },
];

const RecipesListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.recipeItem}
      onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
    >
      <View style={styles.recipeIcon}>
        <Ionicons 
          name={
            item.type === 'electricidad' ? 'flash' :
            item.type === 'vehicular' ? 'car' :
            item.type === 'propiedad' ? 'home' : 'document'
          } 
          size={24} 
          color="#2A7E8D" 
        />
      </View>
      
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeTitle}>{item.title}</Text>
        <Text style={styles.recipeService}>{item.service}</Text>
      </View>
      
      <View style={styles.recipeAmountContainer}>
        <Text style={styles.recipeAmount}>{item.amount}</Text>
        <Text style={styles.recipeDate}>{item.date}</Text>
      </View>
      
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={recipesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 15,
  },
  recipeItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  recipeIcon: {
    backgroundColor: '#e6f4f7',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  recipeInfo: {
    flex: 1,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  recipeService: {
    fontSize: 14,
    color: '#666',
  },
  recipeAmountContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 15,
  },
  recipeAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2A7E8D',
    marginBottom: 3,
  },
  recipeDate: {
    fontSize: 12,
    color: '#999',
  },
});


export default RecipesListScreen;