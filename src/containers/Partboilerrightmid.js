import React from 'react'
 import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'

 
import Boilerrightmid from '../../Image/Boiler New/Boilerrightmid.svg'
import ContainerTop from '../Layout/containtop'
export default class Partboilerrightmid extends React.Component {
  render() {
    const kks1 = this.props.navigation.getParam('KKS1', 'dont have value')
    const kks2 = this.props.navigation.getParam('KKS2', 'dont have value')
    const kks3 = this.props.navigation.getParam('KKS3', 'dont have value')
    return (
      <View style={styles.container}>
        <ContainerTop navigation={this.props.navigation}></ContainerTop>
        <View style={styles.containerbottomall}>
          <ScrollView
            maximumZoomScale={3}
            scrollEnabled={true}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <Boilerrightmid height={400} width={410} alignSelf="center" />
            <View style={styles.containerbottomE1}>
              <TouchableOpacity
                style={{ height: 40, width: 80 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: '10HAD10CL003LT003' })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE2}>
              <TouchableOpacity
                style={{ height: 40, width: 80 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: '10HAD10CL002LT002' })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE3}>
              <TouchableOpacity
                style={{ height: 30, width: 70 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: '10HAD10CP002PT002' })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE4}>
              <TouchableOpacity
                style={{ height: 30, width: 70 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: '10HAD10CP001PT001' })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV1}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA021` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV2}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA022` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV3}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA019` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV4}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA020` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV5}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA017` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV6}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA018` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV7}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA015` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV8}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA016` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV9}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA013` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV10}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA014` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV11}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA011` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV12}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA012` })}
              ></TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const win = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerbottomall: {
    flex: 1,
    backgroundColor: '#fff',

    alignItems: 'center'
  },
  containerbottomE1: {
    // backgroundColor: "#f00",
    height: 40,
    width: 80,
    position: 'absolute',
    marginTop: 80,
    marginLeft: 300
  },
  containerbottomE2: {
    height: 40,
    width: 80,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 168,
    marginLeft: 300
  },
  containerbottomE3: {
    // backgroundColor: "#f00",
    height: 30,
    width: 70,
    position: 'absolute',
    marginTop: 240,
    marginLeft: 245
  },
  containerbottomE4: {
    height: 30,
    width: 70,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 285,
    marginLeft: 245
  },
  containerbottomV1: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 73.5,
    marginLeft: 180
  },
  containerbottomV2: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 73.5,
    marginLeft: 220
  },
  containerbottomV3: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 110,
    marginLeft: 180
  },
  containerbottomV4: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 110,
    marginLeft: 220
  },
  containerbottomV5: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 165,
    marginLeft: 180
  },
  containerbottomV6: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 165,
    marginLeft: 220
  },
  containerbottomV7: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 200,
    marginLeft: 180
  },
  containerbottomV8: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 200,
    marginLeft: 220
  },
  containerbottomV9: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 247,
    marginLeft: 180
  },
  containerbottomV10: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 247,
    marginLeft: 220
  },
  containerbottomV11: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 293,
    marginLeft: 180
  },
  containerbottomV12: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 293,
    marginLeft: 220
  },
  bla: {
    flex: 0.03,
    alignItems: 'center'
  }
})
