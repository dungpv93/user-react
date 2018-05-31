import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj: {}
        }
    }

    getNewInfoUser = (data) => {
        this.setState({
            userObj: data
        });
        this.props.getNewInforUser(data);
    }

    isShowEditForm = () => {
        if(this.props.editFormUser === true){
            return <EditUser
                        getNewInfoUser = {(data)=>this.getNewInfoUser(data)}
                        setStatusFormEdit = {() => this.props.setStatusFormEdit()}
                        userEditObject = {this.props.userEditObject}
                    />
        }
    }
    
    isChangeContent = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.getValueSearch(this.state.tempValue);
    }

    checkShowButton = () => {
        if (this.props.showForm === false) {
            return (
                <div className="btn btn-outline-info" onClick={() => this.props.showButton()}>Add New User</div>
            )
        } else {
            return (
                <div className="btn btn-outline-secondary" onClick={() => this.props.showButton()}>Close Action</div>
            )
        }
    }

    render() {
        return (
            <div>
                {/* Search */}
                <section className="search-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {this.isShowEditForm()}
                                <form className="form-inline">
                                    <input className="form-control mr-sm-2" onChange={(event)=>this.isChangeContent(event)} type="text" placeholder="Insert name..."/>
                                    <div className="btn btn-outline-success my-2 my-sm-0" onClick={(dt)=> this.props.getValueSearch(this.state.tempValue)}>Search</div>
                                    <div className="ml-2">
                                        {this.checkShowButton()}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Search */}
            </div>
        );
    }
}

export default Search;