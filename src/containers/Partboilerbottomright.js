import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image
} from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import ImageZoom from "react-native-image-pan-zoom";
import Boilerbuttomright from "../../Image/Boiler New/Boilerbottomright.svg";
export default class Partboilerbottomleft extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containertop}>
          <TouchableOpacity
            title="Scan"
            onPress={() => this.props.navigation.navigate("ScanScreen")}
          >
            <Image
              style={{
                paddingRight: 20,
                paddingTop: 30,
                width: 50,
                height: 50
              }}
              source={require("../../Image/Untitled-1.png")}
            />
            <View>
              <Text style={{ paddingRight: 15 }}>Qr scan</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.containerbottomall}>
          <ScrollView
            maximumZoomScale={3}
            scrollEnabled={true}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <Boilerbuttomright height={400
            } width={410} alignSelf = 'center' />
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 35 ,width : 52}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerbottom")
              } >
                </TouchableOpacity>
                </View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity  style = {{height : 90 ,width : 123}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerbottom")
              } >
                </TouchableOpacity>
                </View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 30 ,width : 75}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAC10CT002 TT 002'})
              } >
                </TouchableOpacity>
                </View>
                < View style = {
              styles.containerbottom3 
            } >
            < TouchableOpacity style = {{height : 30 ,width : 75}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAC10CT001 TT 001'})
              } >
                </TouchableOpacity>
                </View>
                < View style = {
              styles.containerbottom4
            } >
            < TouchableOpacity style = {{height : 30 ,width : 75}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10LAB10CT002 TT 002'})
              } >
                </TouchableOpacity>
                </View>
            
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  containertop: {
    flex: 0.1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    paddingTop: 20
    //justifyContent: 'center',
  },
  containerbottomall: {
  flex: 0.9,
  backgroundColor: "#fff",
  alignItems: "center",
  },
  containerbottom0: {
    // backgroundColor: "#ff0",
    height: 35, 
    width: 52,
    position: "absolute",
    marginTop: '20%',
    marginLeft: '33%',
  },
   containerbottom1: {
    // backgroundColor: "#f00",
    height: 90,
    width: 123,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 163,
    marginLeft: 136,
  },
  containerbottom2: {
    height: 30,
    width: 75,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 110,
    marginLeft: 300,
  },
  containerbottom3: {
    // backgroundColor: '#cd0',
    position: "absolute",
    height: 30,
    width: 75,
    marginTop: 190,
    marginLeft: 300,
  },
  containerbottom4: {
    // backgroundColor: '#cA0',
    position: "absolute",
    height: 30,
    width: 75,
    marginTop: 295,
    marginLeft: 255,
  },
  
  containerpicture: {
    //flex: 0.8,
    backgroundColor: "#fff"
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch"
  },
  bla: {
    flex: 0.03,
    alignItems: "center"
  }
});