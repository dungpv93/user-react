import React, { Component } from 'react';

class FormAction extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            phone: "",
            permision: ""
        }
    }
    

    isChangeContentForm = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        // package to item
        // let item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.phone = this.state.phone;
        // item.permision = this.state.permision;
    }

    checkShowForm = () => {
        if (this.props.showForm === true) {
            return (
                <div className="col">
                    <div className="card">
                        <div className="card-header">Add User</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="name" autoComplete="tel-national"  placeholder="User name"  onChange={(event)=>{this.isChangeContentForm(event)}} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="phone"  autoComplete="tel-national"  placeholder="Phone" onChange={(event)=>{this.isChangeContentForm(event)}} />
                                </div>
                                <div className="form-group">
                                    <div className="form-group">
                                        <select name="permision" onChange={(event)=>{this.isChangeContentForm(event)}} className="form-control">
                                            <option defaultValue="">Permision...</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Moderator</option>
                                            <option value={3}>Normal User</option>
                                        </select>
                                    </div>
                                </div>
                                <input type="reset" className="btn btn-primary btn-block text-white" onClick={(name,phone,permision)=>this.props.getDataForm(this.state.name,this.state.phone,this.state.permision)} value="Add" />
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() { 
        return (
            <div>
                {this.checkShowForm()}
            </div>
        );
    }
}

export default FormAction;