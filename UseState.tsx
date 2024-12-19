//import {useState} from "react";
//import { TouchableOpacity, View, FlatList, Text, FlatList, TextInput } from "react-native";

function UseState(prop: Array<string>) {
  const [state, setState] = useState(prop); // prop - initial state(can be any type)
  // We can use useState hook for state managing inside functional component.
  // Via it we can save data that can be changed.
  // React automatically rerenders component when state was changed.
  // So we can create interactive and dynamic interfaces.

  const deleteElement = (index: number) =>
    setState((prev: Array<string>) => prev.filter((el, ind) => ind !== index));
    //setState - function that changes state
  const addElement = (el: string) =>
    setState((prev: Array<string>) => prev.concat(el));

  return (
    <>
      <FlatList
        data={state}// state - current variable of state
        renderItem={({item}) => (
          <View>
            <Text>{item}</Text>
            <TouchableOpacity onPress={delete}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity onPress={addElement}>
        <Text>Add</Text>
      </TouchableOpacity>
    </>
  )
};

// We can use useState hook for tracking for changes into UI
function ObservingUseState() {
  const [state, setState] = useState("");

  const saveInput = (text: string) => setState(text); // function get new text and update state
  const clearText = () => setState(""); // clear input and state

  return (
    <>
      <TextInput
        value={state} // displays current value of state, we can see entered text
        onChangeText={saveInput} // updates state via setState on every change of text
        placeholder="Enter text..."
      />
      <TouchableOpacity onPress={clearText}>
        <Text>Clear</Text>
      </TouchableOpacity>
      <View>
        <Text>Your text: {state}</Text>
      </View> 
    </> // we can display current state
  )
};

// We can use function as initial state in useState.
// It can be usefull when initial state requires dome calculations or executing of
//asynchronous operations.
function UseStateFunction() {
  const calculateInitialState = () => {
    return 5;
  }; // we can get data from storage or make requests in this funciton
  // It will be executed only one time for the first time.
  // We can avoid of unnessesary rerenders via it.

  const [state, setState] = useState(calculateInitialState);

  const changeState = () => setState((prev: number) => prev + 5);

  return (
    <View>
      <Text>Value: {state}</Text>
      <TouchableOpacity onPress={changeState}>
        <Text>+ 5</Text>
      </TouchableOpacity>
    </View>
  )
}