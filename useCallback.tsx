// Hook useCallback is used for caching functions to avoid of their recreating on every rendering of components.
// It can be usefull when function is transfered into child component or is used in useEffect.
// It takes function that is used for caching.
// And array of dependencies to point out when function shoul be recreated.
// It is used for optimizing app perfomance.

//import {useCallback} from "react";
//import {View} from "react-native";
function UseCallback() {
  const [state, setState] = useState(0);

  const increment = useCallback(() => {
    setState((prev: number) => prev + 1);
  }, []); //empty array because it does not depen on anything

  const decrement = useCallback(() => {
    setState((prev: number) => prev - 1);
  }, []); // these functions will created only once for first rendering of component

  return (
    <View>
      <Text>Counter: {state}</Text>
      <View>
        <Button title="Increment" onPress={increment}/>
        <Button title="Decrement" onPress={decrement}/>
      </View>
    </View>
  )
}
// This is simple examplar and if functions are not transfered in child components
// or are not used in array dependencies in hooks it can be unuseful and reduce perfomance.
// If we have an app with minimal quantity of renderings then useCallback can be unnessesary.