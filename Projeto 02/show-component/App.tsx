import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';

import { ProfileCard } from './src/components/ProfileCard';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Card */}
      <ProfileCard 
        nome="Roger Andre"
        cargo="Desenvolvedor Back-end"
        foto="https://api.dicebear.com/9.x/adventurer/png?seed=RogerAndre"
      />

      <ProfileCard 
        nome="Antonio Carlos"
        cargo="Analista de Dados"
        foto="https://api.dicebear.com/9.x/adventurer/png?seed=AntonioCarlos"
      />
      <ProfileCard 
        nome="Maria Anna"
        cargo="CTO"
        foto="https://api.dicebear.com/9.x/adventurer/png?seed=MariaAnna"
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
});
