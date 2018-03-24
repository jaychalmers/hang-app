import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import {styles} from './style';
import GridItem from'./gridItem/gridItem';

class GroupGrid extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        //TODO: How are we actually gonna handle this?
        if (this.props.discoverView){
            return <FlatList
                data={this.props.groups}
                renderItem={({item}) => <GridItem item={item}/>}
                keyExtractor={(item,index)=>{
                    return item._id;
                }}
                showsVerticalScrollIndicator={false}
                numColumns={3}
                contentContainerStyle={styles.contentContainerStyle}
            />;
        } else {
            return (
                <Text>This isn't currently working.</Text>
            )
        }
    }
}

export default GroupGrid;