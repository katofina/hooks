// Hook useDebugValue is used to improve displaying of custom hooks in debugging tools.
// We can provide additional information about state of custom hook.
// It can take two arguments: first - basic value, second - additional information,
// that can be displayed depending on state.

//import {useDebugValue, useState, useEffect} from "react";

function useFecth(url: string) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url).then((resp) => {
      if (!resp.ok) {
        throw new Error('Response is not ok');
      }
      return resp.json()
    })
    .then((data) => {
      setData(data);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error);
      setIsLoading(false);
    });
  }, [url]);

  useDebuValue(isLoading ? 'Loading...' : data ? 'Loaded' : 'Error', error);
  // We can see information about status of loading, when we check out our hook in debuggin tools.

  return {data, isLoading, error};
};

//import {Text, View} from "react-native";
// The examplar of using the custom hook: 
function AnyComponent() {
  const {data, isLoading, error} = useFecth('http://any.com/data');

  if (isLoading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {error.message}</Text>

  return (
    <View>
      <Text>Data: {JSON.stringify(data)}</Text>
    </View>
  )
}
