import { StyleSheet, Text, View } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React from 'react'

const Profile = () => {
  return (
    <ThemedView>
      <ThemedText type="title" style={styles.container}>Profile page</ThemedText>
      <ThemedText>Coming soon...</ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Profile

