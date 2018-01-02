import * as styleGuide from '../../../config/styleGuide';

const tabBar = {
    activeTintColor: styleGuide.colorPalette.white,
    inactiveTintColor: styleGuide.colorPalette.uglyBlue,
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
    backgroundColor: styleGuide.colorPalette.prussianBlue,
    height: 55
};

export {styles,tabBar,tabBarIcon};