import { StyleSheet, Text, View } from 'react-native';


type ValuesProps = {
    label: string;
    value: string;
  };
  
  const Values = ({ label, value }: ValuesProps) => (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
  
  const styles = StyleSheet.create({
    label: {
      color: "white",
      fontSize: 18
    },
    value: {
      fontSize: 30,
      color: "#AFB3BE"
    }
  });
  
  export default Values;