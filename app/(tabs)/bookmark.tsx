import { styled } from 'nativewind'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

const StyledThemedView = styled(ThemedView)
const StyledThemedText = styled(ThemedText)

const Bookmark = () => {
  return (
    <StyledThemedView className='flex-1 items-center justify-center'>
      <StyledThemedText type="title" className='text-lg font-bold'>Bookmark</StyledThemedText>
      <StyledThemedText className='text-base'>Coming soon...</StyledThemedText>
    </StyledThemedView>
  )
}

export default Bookmark