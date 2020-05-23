import Dialogs from './Dialogs';
import React from 'react';
import {getUserFromServer, sendMessage, setDialog} from '../../redux/dialogs-reducer'
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogs, getMessages, getUsers} from "../../redux/dialogs-selectors";
import {withRouter} from "react-router-dom";



class DialogsContainer extends React.PureComponent{

    state = {
        currentDialog: Number(this.props.match.params.dialogId),
        users: this.props.users
    }

    /* Checking for dialogId in URL. If it's not - then use default page */
    refreshDialogs = () => {
        let dialogId = Number(this.props.match.params.dialogId);
        this.setState({currentDialog: dialogId})
    }

    /* We have dialogs arr in our reducer. We need to map each dialog for userId and get him from the server*/
    getUsersFromDialogs = (dialogs) => {
        dialogs.forEach(dialog => {
            if(dialog.opponentId){
                this.props.getUserFromServer(dialog.opponentId);
            }
        })

    }



    componentDidMount () {
        this.refreshDialogs();
        this.getUsersFromDialogs(this.props.dialogs);
    }

    componentDidUpdate () {
        this.refreshDialogs();
        this.getUsersFromDialogs(this.props.dialogs);
    }

    render () {
        return (
            <Dialogs
                currentDialog={this.state.currentDialog}
                dialogs={this.props.dialogs}
                messages={this.props.messages}
                users={this.props.users}
                sendMessage={this.props.sendMessage}
                setDialog={this.props.setDialog}
            />
        );
    }

}



let mapStateToProps = (state) => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state),
        users: getUsers(state)
    }
};




export default compose(
    connect(mapStateToProps,{sendMessage, getUserFromServer,setDialog}),
    withRouter,
    withAuthRedirect // Protect from non-auth users
)(DialogsContainer);