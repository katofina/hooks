// Hook useMemo is used for caching results of calculations to avoid of repeated executing on every rendering of component.
// It can improve optimizing perfomance, especially if calculations are difficult or executed often.
// It returns cached result that recalculate obly then, when dependencies are changed.
// It takes function that executes difficult calculation.
// And array of dependencies that define when caching value should be recalculate.
// If one of dependencies is changed, the result of calculation will be recalculate.

const list = [
  {id: 1, name: "Kate"},
  {id: 2, name: "Peter"},
  {id: 3, name: "Maya"},
  {id: 4, name: "Jane"},
  {id: 5, name: "Phill"},
];

interface ListItem {
  id: number;
  name: string;
};

//import {useMemo, useState} from "react";
//import {View, TextInput, Text, FlatList} from "react-native";

function UseMemo() {
  const [searchText, setSearchText] = useState("");

  const filterList = useMemo(() => {
    return list.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
  }, [searchText]); // to recalculate when searchText is changed

  return (
    <View>
      <TextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search..."
      />
      <FlatList
        data={filterList}
        keyExtractor={(item: ListItem) => item.id}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  )
};

// You should not use useMemo if you do not have difficult calculates.
// It adds additional complexity and overhead of dependency tracking and entails slowness of an app.