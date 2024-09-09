import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';


ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);

const App = () => {
  
  const { width, height } = useWindowDimensions();
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const handleOrientationChange = ({ window: { width, height } }: any) => {
      setOrientation(width > height ? 'landscape' : 'portrait');
    };

    const subscription = Dimensions.addEventListener('change', handleOrientationChange);
    return () => subscription?.remove();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      
      <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      
      <ScrollView contentContainerStyle={styles.scrollView}>
        
        <Image
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/prj-music-app.appspot.com/o/img%2FDienKinh%20--%202024%20-%20TDMU.jpg?alt=media&token=9b002f79-22c4-4124-b497-825937f3c16b' }}
          style={[
            styles.image,
            {
              width: width * 0.8,
              height: orientation === 'landscape' ? width * 0.4 : width * 0.6,
            },
          ]}
        />

        
        <View
          style={[
            orientation === 'portrait' ? styles.portrait : styles.landscape,
            styles.buttonContainer,
          ]}
        >
          <View style={[styles.button, { width: width / 2 - 30 }]}>
            <Button title="Button 1" onPress={() => {}} color="#007AFF" />
          </View>
          <View style={[styles.button, { width: width / 2 - 30 }]}>
            <Button title="Button 2" onPress={() => {}} color="#FF3B30" />
          </View>
        </View>

        
        <TextInput
          style={styles.input}
          placeholder="Enter text"
          placeholderTextColor="#999"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  image: {
    borderRadius: 10,
    marginBottom: 20,
  },
  portrait: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  landscape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 10,
    height: 50,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#333',
    marginBottom: 20,
  },
});

export default App;
