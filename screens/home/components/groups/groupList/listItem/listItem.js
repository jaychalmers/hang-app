import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Button from 'react-native-button';
import {styles} from './style';

class ListItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        const group = this.props.item;
        //TODO: Add extra details (Number of members etc, think about layout)
        return (
            <View style={styles.itemView}>
                <Image source={require('../../../../../../static/images/exampleGroup.png')} style={styles.image}/>
                <View style={styles.details}>
                    <Text style={styles.groupName}>{group.name}</Text>
                    <Text style={styles.description}>{group.description}</Text>
                    <Button
                        onPress={() => {}}
                        containerStyle={styles.joinButtonContainer}
                        style={styles.joinButtonText}>
                        Join
                    </Button>
                </View>
            </View>
        )
    }
}

export default ListItem;