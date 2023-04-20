import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  useState,
  useEffect,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";
import { data } from "./data";

function AllEmployeeScreen({ navigation }) {
  //   const [Data, setData] = useState([]);
  //   const url = "https://dummy.restapiexample.com/api/v1/employees";
  //   useEffect(() => {
  //     axios.get(url).then((response) => {
  //       console.log(response.data);
  //       // console.log(response.status);
  //     });
  //   });

  const Data = data;
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("EmployeeDetailScreen", { id: item.id })
      }
    >
      <View style={styles.item}>
        <Text style={styles.title}>{item.employee_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
export default AllEmployeeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f7bc0c",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
