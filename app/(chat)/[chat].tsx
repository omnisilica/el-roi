import { KeyboardAvoidingView, TextInput, View } from "react-native";

export default function ChatRoomScreen() {
  return (
    <KeyboardAvoidingView>
      <View>
        <TextInput placeholder="Message..."></TextInput>
      </View>
    </KeyboardAvoidingView>
  );
}
