import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/AppNavigation';

export default function App() {
  return (
    <SafeAreaView style={{marginTop: StatusBar.currentHeight, flex: 1}}>
      <ExpoStatusBar style='auto' />
      <AppNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
