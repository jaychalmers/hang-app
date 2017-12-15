import * as styleGuide from '../../../config/styleGuide';

const tabBar = {
    activeTintColor: styleGuide.colorPalette.reddishPink,
    inactiveTintColor: styleGuide.colorPalette.whiteTwo,
    indicatorStyle: {
        width: 0,
        height: 0
    }
};

const tabBarIcon = {
    width: 20,
    height: 20
};

const styles = {
    backgroundColor: styleGuide.colorPalette.white,
    height: 55,
    borderBottomColor: styleGuide.colorPalette.whiteTwo,
    borderBottomWidth: 1
};

export {styles,tabBar,tabBarIcon};