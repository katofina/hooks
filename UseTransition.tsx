// Hook useTransition allows to control state of transitions between states.
// It can be usefull when we work with asynchronous funcitons.
// It allows to set the priority of status updates and manage how your application reacts to long-term operations.

//import {useTransition, useState} from "react";
//import {View, Button, Text, ActivityIndicator} from "react-native";
function UseTransition() {
  const [isPending, startTransition] = useTransition();
  // Hook returns array with state of process (isPending) and function that runs transition.
  const [data, setData] = useState(null);

  function fetchData() {
    startTransition(() => { // Imitation of long-term operation (like fetching data)
      setTimeout(() => {
        setData('Data is loaded!');
      }, 2000);
    }); // When it will be executed isPending will be false.
  };

  return (
    <View>
      <Button title="Fetch data" onPress={fetchData}/>
      {isPending && <ActivityIndicator size="small" color="black"/>}
      {data && <Text>{data}</Text>}
    </View>
  )
}
// We should use new architecture.