import styled from "styled-components/native";
import { space, color } from "styled-system";

const Pressable = styled.Pressable`
  padding: 5px;
  ${space}
  ${color}
`;

const View = styled.View`
  background-color: papayawhip;
`;

// color: ${({ theme }) => theme.colors.primary["50"]};
const Text = styled.Text`
  ${color}
`;

export default function PageOne() {
  return (
    <View>
      <Pressable p="sm">
        <Text color="primary.500">Hey</Text>
      </Pressable>
    </View>
  );
}
