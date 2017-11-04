import React from 'react';
import {Text,View,Image} from 'react-native';
import {styles} from './style';
import Button from 'react-native-button';

import BackgroundImage from './../../../components/backgroundImage';

class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image
                style={{width: 20, height: 20}}
                source={require('./../../../static/images/icons/home.png')}/>
        )
    };

    state = {
        listOpen: false
    };

    //updates the state when display mode is changed.
    //arg should be true if switching to list mode, false if map mode
    renderButtons(){
        if (this.state.listOpen) {
            return (
                <View style={styles.modeButtonsView}>
                    <Button
                        onPress={() => {this.setState({listOpen: false});}}
                        containerStyle={styles.inactiveButtonContainer}
                        style={styles.inactiveButtonText}>
                        Map
                    </Button>
                    <Button
                        onPress={() => {this.setState({listOpen: true});}}
                        containerStyle={styles.activeButtonContainer}
                        style={styles.activeButtonText}>
                        List
                    </Button>
                </View>
            );
        } else {
            return (
                <View style={styles.modeButtonsView}>
                    <Button
                        onPress={() => {this.setState({listOpen: false});}}
                        containerStyle={styles.activeButtonContainer}
                        style={styles.activeButtonText}>
                        Map
                    </Button>
                    <Button
                        onPress={() => {this.setState({listOpen: true});}}
                        containerStyle={styles.inactiveButtonContainer}
                        style={styles.inactiveButtonText}>
                        List
                    </Button>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.pageView}>
                <View style={styles.mapView}>
                    <Image
                        source={require('./../../../static/images/background/mapPlaceholder.png')}
                        style={{
                            width: null,
                            height: null,
                            flex: 1
                        }}
                        resizeMode='cover'/>
                </View>
                <View style={styles.foregroundView}>
                    {this.state.listOpen ?
                        <View style={styles.listView}>
                            <Text>This is the list view.</Text>
                        </View> : null
                    }
                    <View style={styles.logoView}>
                        <Text>This will be the logo and top buttons</Text>
                    </View>
                    {this.renderButtons()}
                    <View style={styles.spacerView}/>
                    <View style={styles.sliderView}>
                        {this.state.listOpen ?
                            null : <Text>This will be the distance slider</Text>
                        }
                    </View>
                </View>

            </View>
        )
    }
}

/*
class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    state = {
        modalVisible: false
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={styles.pageView}>
                <View style={styles.mapView}>
                    <Text>This will be the Map view.</Text>
                </View>
                <View style={styles.foregroundView}>

                    <View style={styles.logoView}>
                        <Text>This will be the logo and top buttons</Text>
                    </View>
                    <View style={styles.modeButtonsView}>
                        <TouchableHighlight onPress={() => {
                            this.setModalVisible(!this.state.modalVisible)
                        }}>
                            <Text>Change Mode</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.spacerView}/>
                    <View style={styles.sliderView}>
                        <Text>This will be the distance slider</Text>
                    </View>
                    <Modal
                        style={styles.listView}
                        animationType="none"
                        transparent={true}
                        visible={this.state.modalVisible}
                        presentationStyle="overFullScreen"
                    >

                            <Text>This will be the List view.</Text>

                    </Modal>
                </View>

            </View>
        )
    }
}
 */

export default Home;