import React from 'react';
import Button from 'react-native-button';
import styleGuide from './../../../../../config/styles';

export default class extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }

    render(){
        const {
            title,
            controller,
            active,
            fontSize = 18,
        } = this.props;
        const textStyle = {
            fontSize,
            ...selectTextStyle(active)
        };
        return (
            <Button
                onPress={controller}
                containerStyle={selectContainerStyle(active)}
                style={textStyle}
            >
                {title}
            </Button>
        )
    }
}

selectContainerStyle = (isActive) => {
    return isActive ? activeButtonContainer : inactiveButtonContainer;
};

selectTextStyle = (isActive) => {
    return isActive ? activeButtonText : inactiveButtonText;
};

const buttonContainerValues = {
    width: 98,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1.5%',
    borderColor: styleGuide.colorPalette.uglyBlue,
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 2
};

const buttonTextValues = {
    fontFamily: 'Montserrat-Light'
};

const activeButtonContainer = {
    ...buttonContainerValues,
    backgroundColor: styleGuide.colorPalette.uglyBlue
};

const activeButtonText = {
    ...buttonTextValues,
    color: styleGuide.colorPalette.white
};

const inactiveButtonContainer = {
    ...buttonContainerValues,
    backgroundColor: 'transparent'
};

const inactiveButtonText = {
    ...buttonTextValues,
    color: styleGuide.colorPalette.uglyBlue
};