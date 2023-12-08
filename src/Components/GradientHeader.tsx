import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientHeader = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
      style={styles.header}
    >
      <Text style={styles.headerText}>Your App Name</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80, // Adjust the height as needed
    justifyContent: 'flex-end',
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GradientHeader;
