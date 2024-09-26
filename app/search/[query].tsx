import { styled } from "nativewind";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const StyledThemedView = styled(ThemedView);
const StyledThemedText = styled(ThemedText);

export default function Search() {
  return (
    <StyledThemedView>
      <StyledThemedText>Search</StyledThemedText>
    </StyledThemedView>
  );
}