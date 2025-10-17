import { useHeaderHeight } from "@react-navigation/elements";
import * as React from "react";
import { KeyboardAvoidingView, TextInput } from "react-native";

type Props = {
  children: React.ReactNode;
};

const Sandbox = ({ children }: Props) => {
  const height = useHeaderHeight();
  const textInputRef = React.useRef<TextInput>(null);
  const [messageContent, setMessageContent] = React.useState("");

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={height + 47}
      behavior="padding"
      style={{ flex: 1 }}
      enabled
    >
      <TextInput
        ref={textInputRef}
        placeholder="Type a message"
        className="min-h-[40] bg-commonWhite flex-shrink flex-grow p-[10] mx-10"
        placeholderTextColor={"gray"}
        multiline
        value={messageContent}
        onChangeText={setMessageContent}
      />
    </KeyboardAvoidingView>
  );
};

export default Sandbox;
