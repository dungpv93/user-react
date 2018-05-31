import React, { Component } from 'react';

class TableDataRow extends Component {
    checkPermission = () => {
        if(this.props.permision === 1){
            return "Admin"
        }else if (this.props.permision === 2){
            return "Moderator"
        }else{
            return "Normal User"
        }
    }

    onClickChangeStateEditFrom = () => {
        this.props.setStatusEditForm();
        this.props.editFuncClick();
    }
    deleteButtonClick = (id) => {
        this.props.deleteButtonClick(id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.checkPermission()}</td>
                <td>
                    <div className="btn-group">
                        <button onClick={()=> this.onClickChangeStateEditFrom()} type="button" className="btn btn-warning">Edit</button>
                        <button onClick={(id) => this.deleteButtonClick(this.props.id)} type="button" className="btn btn-danger">Remove</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;