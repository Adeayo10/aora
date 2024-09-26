import { Image, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { StatusBar } from 'expo-status-bar';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';

const StyledThemedView = styled(ThemedView);
const StyledThemedText = styled(ThemedText);
const StyledLink = styled(Link);
const StyledSafeAreaView = styled(SafeAreaView);

export default function HomeScreen() {
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={{ position: 'absolute', bottom: 0, left: 0, height: 178, width: 290 }}
    //     />
    //   }>
    // </ParallaxScrollView>
    <GestureHandlerRootView style={{flex: 1}}>  
      <StyledSafeAreaView className='bg-primary h-full'>
        <ScrollView contentContainerStyle={{height:'100%'}}>

          

        </ScrollView>
      </StyledSafeAreaView>
    </GestureHandlerRootView>
      
    
  );
}
