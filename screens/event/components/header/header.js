import React from 'react';
import {Text,View,Image,TouchableOpacity} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {styles} from './style';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            bookmarked: false,
        };
    }

    componentDidMount(){
    }

    renderBookmark(){
        if (this.state.bookmarked){
            return (<Image style={styles.bookmarkSaved} source={require('../../../../static/images/icons/bookmark-black-shape.png')}/>);
        } else {
            return (<Image style={styles.bookmarkUnsaved} source={require('../../../../static/images/icons/bookmark-white.png')}/>);
        }
    }

    homeButtonPressed(){
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: "Home" }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render(){
        const event = this.props.event;
        const {goBack} = this.props.navigation;
        return (
            <View style={styles.headerView}>
                <View style={styles.bgImageContainer}>
                    <Image
                        style={styles.bgImage}
                        source={require('../../../../static/images/background/eventPlaceholder.png')}
                        resizeMode='cover'
                    />
                    <View style={styles.overlay}/>
                </View>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Image style={styles.backButton} source={require('../../../../static/images/icons/left-arrow.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.homeButtonPressed()}>
                        <Image style={styles.homeButton} source={require('../../../../static/images/icons/home.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.midView}>
                    <Text style={styles.eventName}>{event.name}</Text>
                    <Text style={styles.attendance}>0 people going</Text>
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => {this.setState({bookmarked: !this.state.bookmarked})}}>
                        {this.renderBookmark()}
                    </TouchableOpacity>
                    <Text>Free</Text>
                </View>
            </View>
        )
    }
}
export default Header;