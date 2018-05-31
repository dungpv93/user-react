import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import FormContent from './FormContent';
import FormAction from './FormAction';

import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formStatus: false,
      data: [],
      searchText: '',
      showEditForm: false,
      userEditObject: {}
    }
  }

  
  componentWillMount() {
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
  }
  

  // edit user
  editFun = (user) => {
    this.setState({
      userEditObject: user
    });
  }

  // get data new user
  getDataNewUser = (name,phone,permision) => {
    let item = {};
    item.id = uuidv1();
    item.name = name;
    item.phone = phone;
    item.permision = permision;

    let items = this.state.data;
    items.push(item);

    this.setState({
      data: items
    });
    localStorage.setItem('userData', JSON.stringify(items));
  }

  // get value text search
  getValueSearch = (dt) => {
    this.setState({
      searchText: dt
    });
  }

  // set state form
  changeFormStatus = () => {
    this.setState({
      formStatus: !this.state.formStatus
    });
  }

  // set state form edit user
  setStateEditForm = () => {
    this.setState({
      showEditForm: !this.state.showEditForm
    });
  }

  // get new info user
  getNewInforUser = (info) => {
    this.state.data.forEach((value,key)=>{
      if(value.id === info.id){
        value.name = info.name;
        value.phone = info.phone;
        value.permision = info.permision;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  // delete user
  deleteButtonClick = (id) => {
    let tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== id);
    this.setState({
      data: tempData
    });
    localStorage.setItem('userData', JSON.stringify(tempData));
  }

  render() {
    // localStorage.setItem("userData",JSON.stringify(DataUser));
    let resultSearch = [];
    this.state.data.forEach((item) => {
      let nameItem = item.name.toLowerCase();
      if (nameItem.indexOf(this.state.searchText) !== -1) {
        resultSearch.push(item);
      }
    })
    return (
      <div className="App">
        <Header />
        <Search 
          showButton={() => this.changeFormStatus()} 
          showForm={this.state.formStatus} 
          getValueSearch={(dt) => this.getValueSearch(dt)}
          editFormUser = {this.state.showEditForm}
          setStatusFormEdit={() => this.setStateEditForm()}
          userEditObject={this.state.userEditObject}
          getNewInforUser={(info)=>this.getNewInforUser(info)}
        />
        <div className="content-section">
          <div className="container">
            <div className="row">
              <FormContent 
                dataContent={resultSearch} 
                editData={(user)=> this.editFun(user)}
                setStatusEditForm = {()=>this.setStateEditForm()}
                deleteButtonClick = {(id)=>this.deleteButtonClick(id)} 
              />
              <FormAction showForm={this.state.formStatus} getDataForm={(name,phone,permision)=>{this.getDataNewUser(name,phone,permision)}} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
