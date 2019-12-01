import React from 'react';
import UsersList from "./UsersList";
import { fetchUsers } from '../../services/UserServices';
import Grid from './Grid'
import ActionButtons from './ActionButtons'
import Search from './Search'
import { LoadingScreen } from "./LoadingScreen"


class UsersPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isGrid: false,
            users: [],
            query: '',
            isLoading: true
        };
    }

    onSearch = (val) => {
        this.setState({ query: val })

    }

    changeLayout = () => {
        this.setState(prevState => {

            return {

                isGrid: !prevState.isGrid

            }
        })
    }

    componentDidMount() {

        fetchUsers().then((users) => { this.setState({ isLoading: false, users: users }) });

    }

    refresh = () => {
        this.setState({isLoading : true});
        return (fetchUsers().then((users) => { this.setState( {isLoading: false, users: users }) }))

    }



    render() {

        const filteredUsers = this.state.users.filter(user => user
            .getName()
            .includes(this.state.query.toLowerCase()))

        if (this.state.isLoading) {
            console.log("loading data");
            return <LoadingScreen />
        }

        if (this.state.isGrid) {
            return <>
                <div className="row">
                    <Search onSearch={this.onSearch} />
                    <ActionButtons changeLayout={this.changeLayout} refresh={this.refresh} isGrid={this.state.isGrid} />
                </div>
                <Grid users={filteredUsers} />
            </>
        }

        return <>
            <div className="row">
                <Search onSearch={this.onSearch} />
                <ActionButtons changeLayout={this.changeLayout} refresh={this.refresh} isGrid={this.state.isGrid} />

            </div>

            <UsersList users={filteredUsers} />
        </>
    }
}



export default UsersPage;


