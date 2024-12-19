// We can use hook useContext for getting value from context that was created via function createContext.
// It helps to transfer data through tree of components without using props.

//import {createContext, useState} from "react";
//import {View} from "react-native";
const TeamMembersContext = createContext();

function App() {
  const [users, setUsers] = useState(["Kate, Liya, Peter, Maya"]);

  const addUser = (user: string) => setUsers((prev: Array<string>) => prev.concat(user));
  const deleteUser = (index: number) => setUsers((prev: Array<string>) => prev.filter((el,ind) => ind !== index));

  // We have to wrap components into Provider of context.
  return (
    <TeamMembersContext.Provider value={{users, addUser, deleteUser}}>
      <View>
        <AllUsers/>
        <AddUser/>
      </View>
    </TeamMembersContext.Provider>
  )
};

//Then we can use value of context in child components of Provider via useContext hook

//import TeamMembersContext from "./App";
//import {useContext} from "react";
//import {FlatList, View, Text, Button} from "react-native";
function AllUsers() {
  const {users, deleteUser} = useContext(TeamMembersContext);
  //when context will be changed, child components wil be rerendered.

  return (
    <FlatList
      data={users}
      renderItem={({item, index}) => (
        <View>
          <Text>{item}</Text>
          <Button title="Delete user" onPress={() => deleteUser(index)}/>
        </View>
      )}
    />
  )
}; //export deafult AllUsers

//import TeamMembersContext from "./App";
//import {useContext, useRef} from "react";
//import {View, Text, TextInput, Button} from "react-native";

function AddUser() {
  const {addUser} = useContext(TeamMembersContext);
  const inputRef = useRef(null);

  const sendNewUser = () => addUser(inputRef.current.value);

  return (
    <View>
      <Text>Add user</Text>
      <View>
        <TextInput
          ref={inputRef}
          placeholder="Enter name..."
        />
        <Button title="Add user" onPress={sendNewUser}/>
      </View>
    </View>
  )
} //export deafult AddUser