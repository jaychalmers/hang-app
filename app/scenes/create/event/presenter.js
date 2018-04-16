import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

export default class extends React.Component {
    render(){
        const {
            cancel,
            checkEvent,
            imagePicker,
            image,
            awaitingServerResponse
        } = this.props;
        return (
            <View style={styles.pageView}>
                <Header
                    imagePicker={imagePicker}
                    image={image}
                />
                <Body
                    {...this.props}
                />
                <Footer
                    awaitingServerResponse={awaitingServerResponse}
                    cancel={cancel}
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