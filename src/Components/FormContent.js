import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class FormContent extends Component {

    deleteButtonClick = (id) => {
        this.props.deleteButtonClick(id);
    }

    mapingDatauser = () => this.props.dataContent.map((value,key)=>(
        <TableDataRow 
            key={key}
            stt={key} 
            id={value.id}
            name={value.name}
            phone={value.phone}
            permision={value.permision}
            editFuncClick={(user)=>this.props.editData(value)}
            setStatusEditForm={()=>this.props.setStatusEditForm()}
            deleteButtonClick={(id)=> this.deleteButtonClick(id)} 
        />
    ))
    

    render() {        
        return (
            <div className="col">
                <table className="table table-hover table-inverse">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Permision</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mapingDatauser()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FormContent;