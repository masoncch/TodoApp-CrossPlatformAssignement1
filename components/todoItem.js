import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  CheckBox,
  Alert,
} from "react-native";



export default function TodoItem({ item, pressHandler }) {

  const currDate = new Date().toLocaleDateString();

    const deleteTask = () => {
        Alert.alert(
            "Delete?",
            "Do you want to delete this task?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Delete", onPress: () => pressHandler(item.key) }
            ],
            { cancelable: false }
          );
    }

    const checkBoxChange = () => {
        Alert.alert("DONE","You can delete this todo at any time")
    }
  return (
    <TouchableOpacity onPress={deleteTask} style={styles.item}>
      <Text>{currDate}</Text>
        <Text style={styles.font}>{item.text}</Text>
        <CheckBox
          value={false}
          style={styles.checkbox}
          onChange={checkBoxChange}
        ></CheckBox>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: "flex-end",
  },
  itemCross: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    flexDirection: "row",
    textDecorationLine: 'line-through', textDecorationStyle: 'solid'
  },
  font: {
    fontSize: 16,
  }
});

