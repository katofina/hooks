// This hook allows to generate unique id for components.

//import {useId} from "react";
//import {View, TextInput} from "react-native";

function UseId() {
  const id = useId();

  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        testID={`input-${id}`} // we can use it in testID property for instance
      />
    </View>
  )
}
