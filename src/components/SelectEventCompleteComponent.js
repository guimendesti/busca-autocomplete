import Search from 'react-search'
import React, { Component } from 'react'

export default class SelectEventCompleteComponent extends Component {
  process;
  handleItemsChange(items) {
    console.log(items)
  }

  constructor (props) {
    super(props)
    this.state = {
      repos: []
    }
  }

  getItemsAsync(searchValue, cb) {
    if(searchValue.length < 2){
      return {};
    }
    let url = this.process.env.REACT_APP_URLAPIAUTOCOMPLETE
    fetch(url.toString()).then( (response) => {
      return response.json();
    }).then((results) => {
      if(results.events !== undefined){
        let events = results.events.map( (res, i) => { return { id: i, value: res.event } })
        this.setState({ repos: events })
        cb(searchValue)
      }
    });
  }

  render () {
    return (
        <div>
          <Search items={this.state.repos}
                  placeholder='Informe um evento'
                  NotFoundPlaceholder=""
                  multiple={true}
                  getItemsAsync={this.getItemsAsync.bind(this)}
                  onItemsChanged={this.handleItemsChange.bind(this)} />
        </div>
    )
  }
}