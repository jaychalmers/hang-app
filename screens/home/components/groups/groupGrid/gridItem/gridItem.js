import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import {styles} from './style';

class GridItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        //TODO: Implemented member count
        const group = this.props.item;
        return (
            <View style={styles.itemView}>
                <Image source={require('../../../../../../static/images/exampleGroup.png')} style={styles.image}/>
                <Text style={styles.groupName} numberOfLines={1}>{group.name}</Text>
                <Text style={styles.memberCount} numberOfLines={1}>0 people joined</Text>
            </View>
        )
    }
}

export default GridItem;