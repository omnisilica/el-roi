import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { KeyboardAvoidingView, Pressable, TextInput, View } from "react-native";

function Chat() {
  const textInputRef = React.useRef<TextInput>(null);
  const [messageContent, setMessageContent] = React.useState("");

  async function handleSendMessage() {
    console.log("Message sent");
  }
  return (
    <View>
      <KeyboardAvoidingView>
        <View className="border-2 border-black flex-row items-center rounded-md mb-6">
          <TextInput
            ref={textInputRef}
            placeholder="Type a message"
            className="min-h-[40] bg-commonWhite flex-shrink flex-grow p-[10] mx-10"
            placeholderTextColor={"gray"}
            multiline
            value={messageContent}
            onChangeText={setMessageContent}
          />
          <Pressable onPress={handleSendMessage}>
            <FontAwesome name="paper-plane" size={18} color="black" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Chat;
