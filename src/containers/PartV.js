import React, {useState,useEffect} from "react";
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
import {
  TouchableOpacity
} from "react-native-gesture-handler";
import axios from "axios";
// import Logo from "../../Image/boiler/Water-Treatment-Steam-Boiler-749x372.png";\

const PartV = (props) => {
  const { navigation } = props

  const [partInfo, setPartInfo] = useState({
    DateExpired: "loading",
    DateStart: "loading",
    KKScode: "loading",
    active: 0,
  })
  useEffect(() => {
    
    const fetching = async () => {
      try {
        const kks = navigation.getParam('KKS', 'some default value');
        let {
          data
        } = await axios.get(`http://10.26.15.242:3000/running_equipment/${kks}`)
        setPartInfo(data[0])
      } catch (e) {
        console.log(e)
      }
    }
    fetching()
  }, [])
  return (
     <View style={styles.container}>
        <View style={styles.containertop}>
          <TouchableOpacity
            title="Scan"
            onPress={() => navigation.navigate("ScanScreen")}
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
        <View style={styles.containerbottom}>
          <ScrollView
            maximumZoomScale={5}
            scrollEnabled={true}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            width={'100%'}
          >  
          <Image
            style = {
              {
                paddingTop: 30,
                width: 200,
                height: 150
              }
              }
            source = {
              require("../../Image/boiler/PartV.png")
            }
            
            onPress={ () =>componentDidMount()}>
            
          </Image>
          <Text style = {styles.parttext}>{partInfo.KKScode}</Text>
          <Text style = {styles.parttext}>{partInfo.DateStart}</Text>
          <Text style = {styles.parttext}>{partInfo.DateExpired}</Text>
          </ScrollView>
        </View>
      </View>
  )
}

export default PartV


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"

    //justifyContent: 'center',
  },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch"
  },

  containertop: {
    flex: 0.1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    paddingTop: 20

    //justifyContent: 'center',
  },
  containerbottom: {
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 10,
    flex: 0.9,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: 'center',
  },
  containerpicture: {
    //flex: 0.8,
    backgroundColor: "#fff"
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  parttext: {
    alignItems: "center",
    paddingTop: 30,

  }
});
