import React from 'react';
import {Text,View,Image,Slider,TouchableHighlight} from 'react-native';
import {styles} from './style';
import Button from 'react-native-button';

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
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Calendar')}>
                            <Image style={styles.settingsIcon} source={require("./../../../static/images/icons/calendar.png")}/>
                        </TouchableHighlight>
                        <Text style={styles.logo}>Hang</Text>
                        <Image style={styles.settingsIcon} source={require("./../../../static/images/icons/musica-searcher.png")}/>
                    </View>
                    {this.renderButtons()}
                    <View style={styles.spacerView}/>
                    <View style={styles.sliderView}>
                        {this.state.listOpen ?
                            null : <Slider
                                style={styles.slider}
                            />
                        }
                    </View>
                </View>

            </View>
        )
    }
}

export default Home;