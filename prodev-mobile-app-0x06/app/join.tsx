import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/_joinstyle';
import { GOOGLELOGO, FACEBOOKLOGO, HEROLOGOGREEN } from '../constants';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.iconsection}>
            <MaterialIcons name="arrow-back" size={32} color="black" onPress={() => router.push('/')} />
            <Image source={HEROLOGOGREEN}/>
       </View>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Your Account</Text>
        <Text style={styles.subText}>Enter your details to create a new account</Text>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email Address</Text>
        <TextInput style={styles.formControl} keyboardType="email-address" />

        <Text style={styles.formLabel}>Password</Text>
        <TextInput style={styles.formControl} secureTextEntry />
        
        <Text style={styles.formLabel}>Confirm Password</Text>
        <TextInput style={styles.formControl} secureTextEntry />
      </View>

      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
            <Image source={GOOGLELOGO} />
            <Text style={styles.secondaryButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} />
            <Text style={styles.secondaryButtonText}>Sign in with Facebook</Text>
        </TouchableOpacity>
      </View>
       <View style={styles.signupgroup}>
         <Text style={styles.signupTitleText}>Dont have an account? </Text>
         <Text style={styles.signupSubTitleText} onPress={() => router.push('/join')}>Join Now</Text>
        </View>
    </View>
  );
}
