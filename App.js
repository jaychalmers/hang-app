import React from 'react';
import every from 'lodash';
import {Font} from 'expo';
import {loadLocalUser} from "/app/services/localUserDetails";
import {createRootNavigator} from '/app/navigators';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fontsLoaded: false,
            userLoaded: false,
            user: null
        };
    }

    componentWillMount(){
        this.loadFontsAsync();
        this.loadUserAsync();
    }

    appIsReady(){
        return every([
            this.state.fontsLoaded,
            this.state.userLoaded
        ],Boolean);
    }

    async loadFontsAsync(){
        await Font.loadAsync({
            'Montserrat-Light': require('./static/fonts/Montserrat-Light.otf'),
            'Montserrat-Regular': require('./static/fonts/Montserrat-Regular.otf'),
            'SignPainter-HouseScript': require('./static/fonts/SignPainter-HouseScript.ttf'),
        });
        this.setState({fontsLoaded: true});
    }

    async loadUserAsync(){
        const user = await loadLocalUser(); //Returns {id,token} if found, null if not
        this.setState({
            userLoaded: true,
            user: user ? user : null
        });
    }

    render() {
        const {user} = this.state;
        if (this.appIsReady()){
            const RootNavigator = createRootNavigator(user == null);
            return <RootNavigator/>
        } else {
            return null;
        }
    }
}