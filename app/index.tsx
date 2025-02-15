import { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native'; // Import the hook to detect focus
import HeartButton from './heart';

export default function HomeScreen() {
  const [yesSize, setYesSize] = useState(1);
  const [noSize, setNoSize] = useState(1);
  const router = useRouter();

  // Reset sizes when navigating back to this screen
  useFocusEffect(
    useCallback(() => {
      setYesSize(1);  // Reset Yes button size
      setNoSize(1);   // Reset No button size
    }, [])
  );

  const handleNoPress = () => {
    setYesSize(yesSize + 0.5);
    setNoSize(noSize - 0.5);
  };

  const handleYesPress = () => {
    router.push('/lovescreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Will you be my valentine?</Text>
      <View style={styles.buttonContainer}>
		<HeartButton onPress={handleYesPress} scale={yesSize}/>
		
        <TouchableOpacity
          style={[styles.button, styles.noButton, { transform: [{ scale: noSize }] }]}
          onPress={handleNoPress}
        >
          <Text style={styles.buttonText}>Oh Hail No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  question: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  yesButton: {
    backgroundColor: '#4CAF50',
  },
  noButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  heart: {
    position: 'absolute',
    top: '50%',
  },
  heartText: {
    fontSize: 30,
  },
});
