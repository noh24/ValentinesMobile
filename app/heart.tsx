import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface HeartButtonProps {
    onPress: () => void;  // Type the onPress prop as a function that returns void (no return value),
    scale: number
}

export default function HeartButton({ onPress, scale }: HeartButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, {transform: [{scale}]} ]} onPress={onPress}>
            <Icon name="heart" size={24} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',  // Arrange icon and text side by side
        alignItems: 'center',
        backgroundColor: '#4CAF50',  // Green background color for the button
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
    },
    icon: {
        marginRight: 8,  // Add some space between the icon and the text
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
