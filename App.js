import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Header } from "react-native-elements";
import db from "./localDb";
import PhonicSoundButton from "./PhonicSoundButton";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: "Enter a Word",
      displayText: "",
      chunks: [],
      phones: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="orange"
          centerComponent={{
            text: "Monkey Chunky",
            style: { color: "white", fontSize: 20 },
          }}
        />

        <Image
          style={styles.logoImg}
          source={{
            uri:
              "https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png",
          }}
        />

        {/* <Image
          style={styles.imageIcon}
          source={{
            uri:
              "https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png",
          }}
        /> */}

        <TextInput
          style={styles.inputBox}
          onChangeText={(changedText) => {
            this.setState({
              inputText: changedText,
            });
          }}
          value={this.state.inputText}
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            console.log("search is pressed");
            this.setState({
              displayText: this.state.inputText,
              chunks: db[this.state.inputText].chunks,
              phones: db[this.state.inputText].phones,
            });
          }}
        >
          <Text style={styles.buttonText}> Search </Text>
        </TouchableOpacity>
        {/* <Text style={styles.chunkHeading}>Chunks :</Text>; */}

        {this.state.chunks.map((chunk, index) => (
          <PhonicSoundButton
            wordChunk={this.state.chunks[index]}
            soundChunk={this.state.phones[index]}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputBox: {
    borderWidth: 1,
    outline: "none",
    textAlign: "center",
    height: 40,
    marginTop: "30%",
    width: "80%",
    alignSelf: "center",
    marginBottom: 30,
  },
  searchButton: {
    borderWidth: 1,
    backgroundColor: "wheat",
    textAlign: "center",
    width: 100,
    marginBottom: 30,
    justifyContent: "center",
    borderRadius: 7,
    alignSelf: "center",
    width: 150,
    height: 60,
  },

  buttonText: {
    textAlign: "center",
  },

  logoImg: {
    width: 100,
    heigth: 100,
    marginLeft: 100,
  },

  chunkText: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 17,
  },

  chunkHeading: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 17,
  },

  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});
