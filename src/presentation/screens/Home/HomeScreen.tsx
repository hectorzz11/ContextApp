import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../../config';
import { useProfileStore } from '../../store/profile-store';


export const HomeScreen = () => {
    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);
    const age = useProfileStore(state => state.age);
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>{email}</Text>
        <Text style={styles.title}>{age}</Text>


    </View>
  );
};
