import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config';
import { useCounterStore } from '../../store/counter-store';
import { useNavigation } from '@react-navigation/native';


export const SettingsScreen = () => {

  const total = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: `Contador: ${total}`,
    });
  }, [total]);


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Count: {total}</Text>

        <Pressable
          style={styles.primaryButton}
          onPress={()=>incrementBy(+1)}
        >
        <Text>+1</Text>
        </Pressable>
        <Pressable
          style={styles.primaryButton}
          onPress={()=>incrementBy(-1)}
        >
          <Text>-1</Text>
          </Pressable>
    </View>
  );
};
