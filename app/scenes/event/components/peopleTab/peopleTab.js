import React from 'react';
import {Text,View,Image,StyleSheet,FlatList} from 'react-native';
import Badge from './../../../common/components/userBadge';
import styleGuide from './../../../../config/styles';

export default class extends React.Component {

    render(){
        const {
            attendees
        } = this.props.screenProps;
        return (
            <View style={styles.pageView}>
                <FlatList
                    data={attendees}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    ListHeaderComponent={this.renderTitle}
                    numColumns={5}
                    lazy={true}
                />
            </View>
        )
    }

    renderTitle = () => {
        const {attendees} = this.props.screenProps;
        return <Text style={styles.title}>Going ({attendees.length})</Text>
    };

    renderItem = ({item}) => {
        const { navigation } = this.props.screenProps;
        return <Badge
            key={item._id}
            user={item}
            navigation={navigation}
        />
    };

    keyExtractor = (item, index) => item.id;
}

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        flexDirection: 'column',
        padding: 22,
        alignItems: 'stretch',
    },
    title: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: styleGuide.colorPalette.warmGrey,
        marginBottom: 12
    }
});