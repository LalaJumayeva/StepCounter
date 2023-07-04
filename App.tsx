import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Values from './components/Value';
import RingProgress from './components/RingProgress';
import dateOptions from './components/dateOptions';
import DateOption from './components/DateOption';
import { useState } from 'react';


  export default function App() {
    const [activeOption, setActiveOption] = useState('');
    const [progressRate, setProgressRate] = useState(0);
    const [steps, setSteps] = useState(0);
    const [distance, setDistance] = useState('0 km');
    const [flightsClimbed, setFlightsClimbed] = useState(0);

    const handleOptionPress = (name: string, progressRate: number) => {
      setActiveOption(name);
      setProgressRate(progressRate);
      if (progressRate === 0) {
        setSteps(0);
        setDistance('0 km');
        setFlightsClimbed(0);
      } else {
        setSteps(Math.floor(Math.random() * 10000) + 1);
        setDistance(`${(Math.random() * 10).toFixed(2)} km`);
        setFlightsClimbed(Math.floor(Math.random() * 20) + 6);
      }
    };

    const handleResetPress = () => {
      setProgressRate(0);
      setActiveOption('');
      setSteps(0);
      setDistance('0 km');
      setFlightsClimbed(0);
    };
  

    return (
      <View style={styles.container}>
         <FlatList
        data={dateOptions}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <DateOption
            item={item}
            active={item.name === activeOption}
            onPress={() => handleOptionPress(item.name, item.progressRate)}
          />
        )}
        horizontal
      />
     <Text onPress={handleResetPress} style={styles.rate}>{progressRate * 100}%</Text>
        <RingProgress progress={progressRate} />
        <View style={styles.values}>
        <Values label="Steps" value={steps.toString()} />
        <Values label="Distance" value={distance} />
        <Values label="Flights Climbed" value={flightsClimbed.toString()} />
      </View>
        <StatusBar style="auto" />
      </View>
    );
  } 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      padding: 14,
      position: "relative",
      zIndex: -1
    },
    values: {
      flexDirection: 'row',
      gap: 55,
      flexWrap: 'wrap',
      marginVertical: 55,
    },
    rate: {
      color: "white",
      fontSize: 35,
      textAlign: "center",
      zIndex: 2,
      top: "19%"
    },
   
  });
