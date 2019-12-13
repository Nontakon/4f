import React from 'react';
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
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import ImageZoom from 'react-native-image-pan-zoom';

export default class Home extends React.Component {

    render() {
        return (<View style ={styles.container}>
            {/* <ReactNativeZoomableView
                maxZoom={1.5}
                minZoom={0}
                zoomStep={0.5}
                initialZoom={1}
                bindToBorders={true}
                // onZoomAfter={this.logOutZoomState}
                style={{
                    // padding: 10,
                    backgroundColor: 'red',
                }}>       */}
        <View style = {styles.containertop} >
        <TouchableOpacity
            title = "Scan"
            onPress = {
                () =>
                this.props.navigation.navigate('ScanScreen')
              }
        >
            <Image style = {
                    {
                        paddingRight : 20,
                        paddingTop : 30,
                        width: 50,
                        height: 50
                    }
                }
                 source = {require ('../../Image/Untitled-1.png')}/>
            <View>
                <Text style = {{paddingRight : 15}} >Qr scan</Text>
            </View>
        </TouchableOpacity>
        </View>
        <View style={styles.containerbottom}>
            
        <ImageZoom     cropWidth = {280}
                        cropHeight = {376}
                        imageWidth = {280}
                        imageHeight = {376}
                        onDoubleClick={
                            () => this.props.navigation.navigate('Partboilerleft')} >
    
        <Image style = {
                    {
                        paddingRight: 0,
                        paddingBottom: 0,
                        width: 280,
                        height: 300
                    }
                }
        
        source={require('../../Image/equipment/boilerซ้ายแก้ไข1.png')}/>
      
        </ImageZoom > 
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    
        //justifyContent: 'center',
    },

    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',

    },

    containertop: {
        flex: 0.1,
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        paddingTop : 20,
        
        //justifyContent: 'center',
    },
    containerbottom: {
        flex: 0.9,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    containerpicture: {
        //flex: 0.8,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },

});