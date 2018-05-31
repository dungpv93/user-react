import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            phone: this.props.userEditObject.phone,
            permision: this.props.userEditObject.permision
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    

    changeStateEditForm = () => {
        let item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.phone = this.state.phone;
        item.permision = this.state.permision;
        this.props.getNewInfoUser(item);
        this.props.setStatusFormEdit();
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <div className="card">
                        <div className="card-header">Edit User</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)}  autoComplete="tel-national" defaultValue={this.props.userEditObject.name} type="text" className="form-control" name="name"  placeholder="User name" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)}  autoComplete="tel-national" defaultValue={this.props.userEditObject.phone} type="text" className="form-control" name="phone"  placeholder="Phone" />
                                </div>
                                <div className="form-group">
                                    <div className="form-group">
                                        <select  defaultValue={this.props.userEditObject.permision} name="permision" onChange={(event) => this.isChange(event)} className="form-control">
                                            <option defaultValue="">Permision...</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Moderator</option>
                                            <option value={3}>Normal User</option>
                                        </select>
                                    </div>
                                </div>
                                <input type="reset" className="btn btn-primary btn-block text-white" onClick={()=>this.changeStateEditForm()} value="Save" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;