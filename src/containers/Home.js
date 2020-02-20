import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Modal,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ContainerTop from '../Layout/containtop';
import Cookies from "universal-cookie";
export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  }
  
  render() {
    const kks1 =  this.props.navigation.getParam("KKS1", "some default value");
    function remove_last_character(element) {
      return element.slice(0,element.length - 1)
    }
    return (
      <View style={styles.container}>
         <ContainerTop navigation ={this.props.navigation}>
        </ContainerTop>
        <View style={styles.containerbottom}>
          <TouchableOpacity
              style={{marginTop: 20,alignSelf:'center'}}
              title="Scan"
              alignItems = "center"
              onPress={() => this.props.navigation.navigate("Partboiler")}
            >
              <Text style={{ marginTop: 5, alignSelf: 'center', fontSize: 30,fontWeight:'bold' }}>Factory {remove_last_character(kks1)}</Text>
              <Image
                style = {
                  {
                    marginTop: 20,
                    width: 400,
                    height: 230
                  }
                }
                source={require("../../Image/boiler/Water-Treatment-Steam-Boiler-749x372.png")}>
              </Image>
              
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    //justifyContent: 'center',
  },
  containerbottom: {
    flex: 1,
  },
});
