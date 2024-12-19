// We can use hook useReducer for state managment of component with more complex logic.
// We can use it like useState but when updating of state depends on previous state
// or when we needed to execute several steps for changing state. Via it we can use side effects.
// It takes two arguments: reducer and initial state.
// Reducer is a function that describes how state is changed depending on action.
// Actions are types of actions that can be executed.
// It returns array with current state and dispatch function for changing state via action and reducer.

interface State {
  count: number;
}

interface Action {
  type: string;
}

const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  } //depending on type of action reducer changes state
};

//import {useReducer} from "react";
//import {View, Text, Button} from "react-native";
function UseReducer() {
  const initialState: State = { count: 0 };

  const [state, dispatch] = useReducer(counterReducer, initialState);
  //dispatch function is used for sending actions into reducer, that changes state
  
  const increment = () => dispatch({type: "increment"});
  const decrement = () => dispatch({type: "decrement"});
  //we transfer object with property type in dispatch function to define what is action should be executed

  return (
    <View>
      <Text>Counter: {state.count}</Text>
      <View>
        <Button title="Increment" onPress={() => dispatch({type: "increment"})}/>
        <Button title="Decrement" onPress={() => dispatch({type: "decrement"})}/>
      </View>
    </View>
  )
};
