import React, { Component } from "react";
import api from "../services/api";
import { View, Text } from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    title: "JSHunt"
  };

  state = {
    docs: []
    //counter: 0
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get("/products");

    const { docs } = response.data;

    console.log(docs);
    this.setState({ docs });
    //this.setState({ counter: docs.length });
  };

  render() {
    return (
      <View>
        {/* <Text>Pagina Main: {this.state.counter}</Text> */}
        {this.state.docs.map(product => (
          <Text>{product.title}</Text>
        ))}
      </View>
    );
  }
}
