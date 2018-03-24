import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import ListItem from './listItem/listItem';
import * as _ from 'lodash';
import {styles} from './style';

class HomeList extends React.Component {

    constructor(props){
        super(props);
    }

    renderList(){
        if (this.props.awaitingServerResponse){
            return <Text>Waiting for response from server</Text>;
        } else if (this.props.error){
            console.log(this.state.error);
            return <Text>Error contacting server</Text>;
        } else {
            const events = _.sortBy(this.props.events,(event)=>event.schedule[0].startTime);
            return <FlatList
                data={events}
                renderItem={({item}) => <ListItem item={item} navigate={this.props.navigate}/>}
                keyExtractor={(item, index) => {
                    return item._id;
                }}
                showsVerticalScrollIndicator={false}
            />
        }
    }

    render(){
        return (
            <View style={styles.listView}>
                <View style={styles.listHeadSpacer}/>
                <View style={styles.listContentView}>
                    {this.renderList()}
                </View>
            </View>
        )
    }
}

export default HomeList;