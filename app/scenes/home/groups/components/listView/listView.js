import React from 'react';
import {View,FlatList,StyleSheet} from 'react-native';
import ListItem from './listItem';
const some = require('lodash/some');

/*

This is the listView component that is shared by the Event and Group tabs.
It's different to the one used by the Map view.

 */

export default class extends React.Component {
    render(){
        const {
            items,
            refresh,
            refreshing,
        } = this.props;
        return (
            <View style={styles.component}>
                <FlatList
                    data={items}
                    keyExtractor={keyExtractor}
                    showVerticalScrollsIndicator={false}
                    renderItem={this.renderItem}
                    onRefresh={()=>{refresh()}}
                    refreshing={refreshing}
                />
            </View>
        )
    }

    renderItem = ({item}) => {
        const {
            onClick,
            type,
            navigateTo,
        } = this.props;
        const active = this.getActiveStatus(item);
        return <ListItem
            item={item}
            onClick={onClick}
            type={type}
            active={active}
            navigateTo={navigateTo}
        />
    };

    getActiveStatus = (item) => {
        const {type,user} = this.props;
        if (type === "GROUP_DISCOVER"){
            return false;
        } else if (type === "GROUP_JOINED"){
            return true;
        } else {
            throw new Error("Invalid type supplied to listView: " + type);
        }
    };
}

keyExtractor = (item, index) => {
    return item._id;
};

const styles = StyleSheet.create({
    component: {
        flex: 1,
        padding: 12
    }
});