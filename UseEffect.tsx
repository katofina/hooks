// Hook useEffect is used for executing of side effects in functional components.
// It substitutes life cycles methods.
// It can be usefull when we are working with API, subscriptions on events, interactions with DOM.
// The first argument - is function that will be executed after component's rendering.
// The second argument - is array of dependencies, that determines when effect should be executed.
// If we pass second argument it will be executed for every rerender.
// If array is empty then it will be executed only once when mounting a component.
// Also we can use return function for clearing on unmounting of component.
// UseEffect works asyncronously. So it does not block main thread of execution.

//import {View, Text, TextInput} from "react-native";
//import {useState, useEffect} from "react";

function EmptyUseEffect() {
  const [state, setState] = useState("");

  const makeWelcome = () => setState("Hello, user!");

  useEffect(() => {
    makeWelcome();
  }, []); // Will be executed only once.

  return (
    <View>
      <Text>{state}</Text>
    </View>
  )
};

function UseEffectWithDependencies() {
  const [state, setState] = useState("Text");

  const changeText = (text: string) => setState(text);

  useEffect(() => {
    console.log(`State was changed: ${state}`);
  }, [state]);// It will be executed when state will be changed.
  // We can use many dependencies if we needed.

  return (
    <>
      <TextInput
        value={state}
        onChangeText={changeText}
        placeholder="Change text..."
      />
      <View>
        <Text>Current state: {state}</Text>
      </View>
    </>
  )
};

function clearUseEffect() {
  const [state, setState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev: number) => prev + 1);
    }, 1000); // make timer that will be updated every second

    return () => clearInterval(interval); // we clear interval on unmounting of component.
  }, []); // empty array - only once

  return (
    <View>
      <Text>Elapsed time: {state}</Text>
    </View>
  )
};
