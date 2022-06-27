import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export interface ButtonProps {
  text: string;
  width?: string | number;
  height?: string | number;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}
const CustomButton = ({text, width, height, onPress}: ButtonProps) => {
  return (
    <Pressable
      style={[
        styles.pressableContainer,
        {width: width ? width : styles.pressableContainer.width},
        {height: height ? height : styles.pressableContainer.height},
      ]}
      onPress={onPress}
    >
      <View style={styles.rootContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  pressableContainer: {
    width: 100,
    height: 100,
    margin: 50,
  },
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'blue',
    borderRadius: 8,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});
