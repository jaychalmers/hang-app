import React from 'react';
import {View,ScrollView,StyleSheet} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GroupLinker from './groupLinker';
import TitleInput from './titleInput';
import LocationPicker from './locationPicker';
import SchedulePicker from './schedulePicker';
import DatePicker from './datePicker';
import RepeatPicker from './repeatPicker';
import DescriptionInput from './descriptionInput';
import CategoryPicker from './categoryPicker';

export default class extends React.Component {
    render(){
        const {
            title,
            updateTitle,
            location,
            updateLocation,
            schedule,
            description,
            updateDescription,
            startDate,
            updateStartDate,
            endDate,
            updateEndDate,
            category,
            setCategory,
            group,
            setGroup,
            myGroups,
        } = this.props;
        return (
                <KeyboardAwareScrollView
                    style={styles.scrollViewStyle}
                    contentContainerStyle={styles.scrollViewContentContainerStyle}
                    showsVerticalScrollIndicator={false}
                >
                    <TitleInput
                        title={title}
                        updateTitle={updateTitle}
                    />
                    <LocationPicker
                        location={location}
                        updateLocation={updateLocation}
                    />
                    <DatePicker
                        type={"Starts"}
                        date={startDate}
                        update={updateStartDate}
                    />
                    <DatePicker
                        type={"Ends"}
                        date={endDate}
                        update={updateEndDate}
                        startDate={startDate}
                    />

                    <RepeatPicker/>
                    <DescriptionInput
                        description={description}
                        onChangeText={updateDescription}
                    />
                    <GroupLinker
                        group={group}
                        myGroups={myGroups}
                        setGroup={setGroup}
                    />
                    <CategoryPicker
                        category={category}
                        setCategory={setCategory}
                    />
                </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    bodyView: {
        flex: 1,
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: 12,
        marginBottom: 12,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    scrollViewStyle: {
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: 12,
        marginBottom: 12
    },
    scrollViewContentContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    }
});

/*
<SchedulePicker schedule={schedule}/>

 */