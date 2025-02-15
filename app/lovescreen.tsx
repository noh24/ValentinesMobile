import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';  // Import useRouter to navigate back

export default function LoveScreen() {
  const router = useRouter();  // Initialize the router to handle navigation

  const handleBackPress = () => {
    router.back();  // This will navigate back to the previous screen (index screen)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>❤️ Thanks for choosing me ❤️</Text>
      
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.buttonText}>Try again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffebee',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 20,
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: '#2196F3',  // Blue background color for the back button
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
