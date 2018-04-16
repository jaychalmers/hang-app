import React from 'react';
import Presenter from './presenter';
import {post} from './../../../services/api';
import {Permissions} from 'expo';

//TODO: Social logins
export default class extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hasCameraPermission: false,
            photo: null
        };
    }

    async componentWillMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted'});
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            <Presenter
                {...this.state}
                next={this.next}
                goBack={() => {goBack()}}
                embedPic={this.embedPic}
            />
        )
    }

    next = () => {
        const {
            auth,
            profile
        } = this.props.navigation.state.params;
        const {navigate} = this.props.navigation;
        if (this.state.photo){
            profile.photo = this.state.photo;
        }
        navigate('Finish',{
            auth: auth,
            profile: profile
        });
    };

    embedPic = (photo) => {
        this.setState({photo: photo})
    };
}