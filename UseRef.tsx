// Hook useRef we can use for creating references on elements or components to interact
// with them directly, passing state or rendering. And we can save some value without rerendering.

// We can use it to focus on TextInput
//import {useRef} from "react";
//import {View, TextInput, Button} from "react-native";
function focus() {
  const inputRef = useRef(null);

  const focusInput = () => inputRef.current.focus();

  return (
    <View>
      <TextInput
        ref={inputRef}
        placeholder="Enter text..."
      />
      <Button title="Focus on input" onPress={focusInput}/>
    </View>
  )
}

// We can use it to get value from TextInput
//import {useRef} from "react";
//import {View, TextInput, Button} from "react-native";

function readFromInputViaRef() {
  const inputRef = useRef(null); // it will not be rerendered when user enter the text

  const showCurrentValue = () => console.log(`Current value: ${inputRef.current.value}`);

  return (
    <View>
      <TextInput
        ref={inputRef}
        placeholder="Enter name..."
      />
      <Button title="Show current value" onPress={showCurrentValue}/>
    </View>
  )
}
