// This hook is used to control refs on components, by providing an opportunity
// to change their behaviour or access to internal methods of child component.

//import {useRef, useImperativeHandle} from "react";
//import {View, Text, Button, TextInput} from "react-native";

const ChildComponent = React.forwardRef((props?: Object, ref: RefObject<HTMLInputElement>) => {
  //via function forwardRef we transfer parent ref in child component
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  })); // we get access to focus function to parent component

  return (
    <View>
      <TextInput ref={inputRef}/>
    </View>
  );
});

function ParentComponent() {
  const childRef = useRef();

  const handleButtonClick = () => childRef.current.focus();
  //we can use focus funciton in parent component for focusing on input in child component

  return (
    <View>
      <Button title="Focus Input" onPress={handleButtonClick}/>
      <ChildComponent ref={childRef}/>
    </View>
  ) // we transfer ref in childComponent
}