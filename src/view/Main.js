import React from 'react';
import UsersPage from './users/UsersPage';


class Main extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <main>
                <UsersPage isGrid={this.props.isGrid} />
            </main>
        )

    }
}



export default Main;