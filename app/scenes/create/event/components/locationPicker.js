import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE } from './../../../../config/constants';
import styleGuide from "./../../../../config/styles";

/*
This component takes a users input, and speaks to the
Google Places API to search for locational data. The user needs
to pick a place from the dropdown list before they can
create the event.
 */

export default class extends React.Component {
    render(){
        const {updateLocation} = this.props;
        return (
            <View style={styles.componentView}>
                <Text style={styles.label}>Location</Text>
                <View style={styles.textInputBox}>
                    <GooglePlacesAutocomplete
                        placeholder={'Location'}
                        minLength={3}
                        autoFocus={false}
                        listViewDisplayed={'auto'}
                        renderDescription={row => row.description}
                        onPress={(data,details = null) => {
                            updateLocation(data);
                        }}
                        query={{
                            //TODO: Once location services are implemented, restrict this to within radius of users location
                            key: GOOGLE.PLACES_KEY,
                            language: 'en',
                            components: 'country:uk' //restricts results to UK
                            //types: 'address'
                        }}
                        styles={{
                            container: styles.container,
                            textInputContainer: styles.textInputContainer,
                            textInput: styles.textInput,
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    componentView: {
        flexDirection: 'column',
        marginBottom: 22
    },
    label: {
        fontFamily: 'Montserrat-Light',
        fontSize: 8,
        alignSelf: 'flex-start',
        color: styleGuide.colorPalette.warmGrey,
        marginBottom: 2,
    },
    container: {
        flex: 1
    },
    textInputContainer: {
        height: 33,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        borderWidth: 1,
        paddingRight: 7,
        paddingLeft: 7,
        //override component defaults
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: styleGuide.colorPalette.whiteTwo,
        borderRightColor: styleGuide.colorPalette.whiteTwo,
        borderBottomColor: styleGuide.colorPalette.whiteTwo,
        borderLeftColor: styleGuide.colorPalette.whiteTwo,
    },
    textInput: {
        backgroundColor: 'transparent',
        fontFamily: 'Montserrat-Light',
        fontSize: 12,
        color: styleGuide.colorPalette.warmGrey,
        //override default stuff
        height: '100%',
        borderRadius: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0
    },
    inputTextPlaceholder: {
        flex: 1,
        fontFamily: 'Montserrat-Light',
        fontSize: 12,
        color: 'rgb(155,155,155)'
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: styleGuide.colorPalette.whiteTwo,
        transform: [{rotate: '270deg'}]
    }
});

/*


{location ?
    <Text style={styles.inputTextCompleted}>{location}</Text> :
    <Text style={styles.inputTextPlaceholder}>Choose your location</Text>
}
<Image
    style={styles.icon}
    source={require('./../../../../../static/images/icons/down-arrow-inside-circle.png')}
/>

 */