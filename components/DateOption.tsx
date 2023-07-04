import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface DateOptionProps {
  item: {
    name: string;
  };
  active: boolean;
  onPress: () => void;
}

const DateOption: React.FC<DateOptionProps> = ({ item, active, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container_2,
        { backgroundColor: active ? 'white' : 'black' },
      ]}
    >
      <Text style={[styles.text, { color: active ? 'black' : 'gray' }]}>
        {item.name}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container_2: {
    display: 'flex',
    padding: 9,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
    height: 45,
    borderRadius: 100,
    marginRight: 5,
    marginTop: 15,
  },
  text: {
    width: 26,
    textAlign: 'center',
    fontSize: 12,
  },
});

export default DateOption;
