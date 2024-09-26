import { styled } from 'nativewind'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

const StyledThemedView = styled(ThemedView)
const StyledThemedText = styled(ThemedText)
import React from 'react'

const SignIn = () => {
  return (
    <StyledThemedView className='flex-1 items-center justify-center'>
      <StyledThemedText type="title" className='text-lg font-bold'>Sign In</StyledThemedText>
      <StyledThemedText className='text-base'>Coming soon...</StyledThemedText>
    </StyledThemedView>
  )
}

export default SignIn