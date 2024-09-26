import { Text, View } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { styled } from 'nativewind'

const StyledThemedView = styled(ThemedView)
const StyledThemedText = styled(ThemedText)

const Profile = () => {
  return (
    <StyledThemedView className='flex-1 items-center justify-center'>
      <StyledThemedText type="title" className='text-lg font-bold'>Profile page</StyledThemedText>
      <StyledThemedText className='text-base'>Coming soon...</StyledThemedText>
    </StyledThemedView>
  )
}

export default Profile
