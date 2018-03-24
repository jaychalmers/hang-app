import React from 'react';
import {StyleSheet,View,Text,FlatList} from 'react-native';
import ListItem from './listItem';
import styleGuide from './../../../../../config/styles';
import * as _ from 'lodash';

export default class extends React.Component {

    render(){
        const {events,refresh,awaitingServerResponse} = this.props;
        const sortedEvents = _.sortBy(events,(event)=>event.schedule[0].startTime);
        return (
            <View style={styles.overlay}>
                <View style={styles.contentView}>
                    <FlatList
                        data={sortedEvents}
                        keyExtractor={keyExtractor}
                        showsVerticalScrollIndicator={false}
                        renderItem={this.renderItem}
                        onRefresh={()=>{refresh()}}
                        refreshing={awaitingServerResponse}
                    />
                </View>
            </View>
        )
    }

    renderItem = ({item}) => {
        return <ListItem
            item={item}
            navigateTo={this.props.navigateTo}
        />
    };
}

keyExtractor = (item, index) => {
    return item._id;
};

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: styleGuide.colorPalette.white,
        opacity: 0.9,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    contentView: {
        flex: 1,
        marginTop: '40%',
        width: '86%'
    }
});