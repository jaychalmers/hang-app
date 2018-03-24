import React from 'react';
import {View,Text,StyleSheet,SectionList} from 'react-native';
import ListItem from './listItem/listItem';
import * as _ from 'lodash';
import {styles} from './style';

class GroupList extends React.Component {

    constructor(props){
        super(props);
    }

    processSections(){
        const user = "THIS SHOULD BE THE USER ID";
        const groups = this.props.groups;
        if (this.props.discoverView){
            return [{data: groups,title:"Discover Groups"}];
        } else {
            const createdGroups = _.filter(groups,{'creator':user});
            //TODO: Is it quicker to check the joined groups in the user object?
            const joinedGroups = _.filter(groups,(group)=>_.includes(group.members,user));
            return [
                {data: createdGroups,title:"Groups created"},
                {data: joinedGroups,title:"Groups joined"},
            ]
        }
    }

    renderSectionHeader(section){
        if (this.props.discoverView){
            return null;
        } else {
            return (
                <View style={styles.sectionHeaderView}>
                    <Text style={styles.sectionHeaderText}>{section.title} ({section.data.length})</Text>
                </View>
            );
        }
    }

    render(){
        const sections = this.processSections();
        return (
            <SectionList
                sections={sections}
                renderItem={({item}) => <ListItem item={item}/>}
                renderSectionHeader={({section})=>this.renderSectionHeader(section)}
                keyExtractor={(item,index)=>{
                    return item._id;
                }}
                showsVerticalScrollIndicator={false}
                stickySectionHeadersEnabled={false}
            />
        )
    }
}

export default GroupList;