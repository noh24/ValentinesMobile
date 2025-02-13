import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
// ... existing code ...
export default function Index() {
	return (
		<View style={styles.container}>
			<Text style={styles.question}>Will you be my valentines</Text>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={[styles.button, styles.yesButton]}>
					<Text style={styles.buttonText}>Yes</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button, styles.noButton]}>
					<Text style={styles.buttonText}>No</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
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
})
