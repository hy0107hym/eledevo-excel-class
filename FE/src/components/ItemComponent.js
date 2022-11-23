import React, { Component } from "react";
import * as XLSX from 'xlsx'
export default class ItemComponent extends Component {
  state = {
    id: "",
    name: "",
    age: "",
    ageUpdate: "",
    idUpdate: "",
    nameUpdate: "",
    file: [], 
  };
  render() {
    let listItem = [];
    if (this.props.items) {
      listItem = this.props.items.map((item, key) => {
        return (
          <tr key={key}>
            <th>{key + 1}</th>
            <th>{item.name}</th>
            <th>{item.age}</th>
            <th>
              <button onClick={() => this.props.deleteItem({ id: item._id })}>
                DELETE</button>
            </th>
            <th>
              <button
                onClick={() =>this.setState({nameUpdate: item.name, idUpdate: item._id, ageUpdate: item.age})}
              >EDIT</button>
            </th>
          </tr>
        );
      });
    }

    return (
      <div>
        <div>
          <input
            type="file"
            multiple
            onChange={(e) => this.setState({ file: e.target.files })}
          ></input>
          <button 
            onClick={() => this.props.importExcel({file : this.state.file})}
          >Import</button>
          <br></br>
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
          ></input>
          <input
            onChange={(e) => this.setState({ age: e.target.value })}
          ></input>
          <button
            onClick={() => this.props.addItem({ name: this.state.name, age: this.state.age })}
            >ADD
          </button>
        </div>

        <div>
          <input
            type="text"
            onChange={(e) => this.setState({ nameUpdate: e.target.value })}
            value={this.state.nameUpdate}
          ></input>
          <input
            type="text"
            onChange={(e) => this.setState({ ageUpdate: e.target.value })}
            value={this.state.ageUpdate}
          ></input>
          <button
            onClick={() =>
              this.props.updateItem({ name: this.state.nameUpdate,age: this.state.ageUpdate, id: this.state.idUpdate})}
          >Update
          </button>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Tuoi</th>
                <th>Note</th>
              </tr>
              {listItem}
            </thead>
          </table>
        </div>
        <div>
            <button
                onClick={() => {
                for (let i = 0; i < this.props.items.length; i++) {
                    this.props.items[i]._id = i + 1
                }
                let ws = XLSX.utils.json_to_sheet(this.props.items)
                let wb = { Sheets: { data: ws }, SheetNames: ['data'] }
                XLSX.writeFileXLSX(wb, 'excel-test.xlsx')
                }}
            >Export</button>
        </div>
      </div>
    );
  }
}
