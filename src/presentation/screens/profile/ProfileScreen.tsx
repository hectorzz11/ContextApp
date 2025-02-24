import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config';
import { useProfileStore } from '../../store/profile-store';

export const ProfileScreen = () => {

  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  const age = useProfileStore(state => state.age);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>{email}</Text>
        <Text style={styles.title}>{age}</Text>

        <Pressable
          style={styles.primaryButton}
          onPress={()=>useProfileStore.setState({name: 'Héctor Javier'})}
          >
          <Text>cambiar nombre</Text>
        </Pressable>

        <Pressable
          style={styles.primaryButton}
          onPress={()=>changeProfile('John Doe', 'john.d@gmail.com', 35)}
          >
          <Text>Regresar a anterior</Text>

        </Pressable>
        <Pressable
          style={styles.primaryButton}
          onPress={()=>useProfileStore.setState({age: 40})}
          >
          <Text>cambiar edad</Text>
        </Pressable>
    </View>
  );
};
