import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

export default class extends React.Component {
    render(){
        const {cancel,submitEvent,checkEvent} = this.props;
        return (
            <View style={styles.pageView}>
                <Header/>
                <Body
                    {...this.props}
                />
                <Footer
                    cancel={cancel}
                    submitEvent={submitEvent}
                    checkEvent={checkEvent}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
});