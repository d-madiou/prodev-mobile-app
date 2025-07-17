// app/index.tsx
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '../constants';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        {/* Logo at the top */}
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} resizeMode="contain" />
        </View>
        
      
        <View style={{ flex: 1,}}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Find your favorite place here</Text>
          </View>
          
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              The best prices for over 2 million properties worldwide.
            </Text>
          </View>
        </View>
        

        <View style={{ paddingBottom: 60 }}>
          <View style={styles.buttonGroup}>
            <TouchableOpacity 
              style={styles.buttonPrimary} 
              onPress={() => router.push('/join')}
            >
              <Text style={styles.buttonPrimaryText}>Join</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.buttonSecondary} 
              onPress={() => router.push('/signin')}
            >
              <Text style={styles.buttonSecondaryText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.buttonGroupSubText}>
            <Text style={styles.titleSubText}>Continue to home</Text>
            <Text style={styles.titleSubText}>→</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}