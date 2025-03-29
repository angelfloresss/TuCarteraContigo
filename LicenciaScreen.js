import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const LicenciaScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* 1) Tarjeta superior con foto, nombre y número de licencia */}
      <View style={styles.headerCard}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: 'https://img.freepik.com/vector-gratis/meme-cuadrado-gato-vibrante-simple_742173-4493.jpg' }}
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.userName}>Diego Ortiz</Text>
            <Text style={styles.licenseNumber}>Q1249903-23 No. Licencia</Text>
          </View>
        </View>
      </View>

      {/* 2) Tarjeta QR con botón y texto al mismo nivel */}
      <View style={styles.qrCard}>
        <Text style={styles.cardLabel}>VERIFICACIÓN LICENCIA</Text>
        <TouchableOpacity style={styles.qrButton}>
          <Text style={styles.qrButtonText}>Mostrar QR</Text>
        </TouchableOpacity>
      </View>

      {/* 3) Tarjeta de la firma */}
      <View style={styles.signatureCard}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/5/56/Signature_of_Clarence_King.jpg' }}
          style={styles.signatureImage}
        />
      </View>

      {/* 4) Información separada por líneas divisorias */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Fecha de Expedición: Lunes 11 Diciembre del 2023</Text>
        <View style={styles.divider} />
        <Text style={styles.infoText}>Vigencia: Lunes 11 Diciembre del 2028</Text>
        <View style={styles.divider} />
        <Text style={styles.infoText}>Fecha de Nacimiento: 24 Febrero del 2004</Text>
        <View style={styles.divider} />
        <Text style={styles.infoText}>Antigüedad: 0</Text>
      </View>

      {/* 5) Dos contenedores al mismo nivel */}
      <View style={styles.bottomRow}>
        <View style={styles.bottomCard}>
          <Text style={styles.bottomCardTitle}>Donador de órganos</Text>
          <Text style={styles.bottomCardValue}>SI</Text>
        </View>
        <View style={styles.bottomCard}>
          <Text style={styles.bottomCardTitle}>Tipo de sangre</Text>
          <Text style={styles.bottomCardValue}>ORH+</Text>
        </View>
      </View>

      {/* 6) Último contenedor para restricciones */}
      <View style={styles.restrictionsCard}>
        <Text style={styles.restrictionsTitle}>Restricciones</Text>
        <Text style={styles.restrictionsValue}>USA LENTES</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  headerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 128,
    height: 128,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  licenseNumber: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  qrCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  qrButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  qrButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  signatureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  signatureImage: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    paddingVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  bottomCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginRight: 8,
  },
  bottomCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  bottomCardValue: {
    fontSize: 14,
    color: '#555',
  },
  restrictionsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
  },
  restrictionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  restrictionsValue: {
    fontSize: 14,
    color: '#555',
  },
});

export default LicenciaScreen;
export { LicenciaScreen };