// This hook allows to defer updating of value until base interface will be updated.
// It can be usefull for data entry to avoid of incorrect behaviour of interface with frequent text input.

//import {useDeferredValue, useState} from "react";
//import {View, TextInput, Text} from "react-native"

function UseDeferredValue() {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);
  // We transfer some value that we want to defer.
  // This value will be updated with some latency allowing react on updates with higher priority.

  return (
    <View>
      <TextInput
        placeholder="Enter text..."
        value={input}
        onChangeText={setInput}
      />
      <Text>Deferred value: {deferredInput}</Text>
    </View>
  )
}
