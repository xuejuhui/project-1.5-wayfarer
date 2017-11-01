import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';


class Example extends Component {
  render() {
    let data = [{
      value: 'London',
    },
    {
      value: 'New York',
    },
    {
      value: 'Vancouver',
    },
    {
      value:'Taipei',
    },
    {
      value:'Fujien'
    },
  ];

    return (
      <Dropdown
        label='Favorite City'
        data={data}
      />
    );

  }
}




export default Postmodal;
