import React from 'react';
import Item from './itemListEntry.jsx';
import { Table } from 'semantic-ui-react';


//render item list as popup table
const ItemList = (props) => {
  console.log('ItemListView!')
  if (props.items.length) {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>qty</Table.HeaderCell>
            <Table.HeaderCell>name</Table.HeaderCell>
            <Table.HeaderCell>date added</Table.HeaderCell>
            <Table.HeaderCell>user</Table.HeaderCell>
            <Table.HeaderCell colSpan='3'>edit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.items.map(item => (
            <Item {...props.actions} name={item.name} quantity={item.quantity} type={item.type} id={item.id} key={item.id} date={item.createdAt.split('T')[0]} user={item.user.split('@')[0]}/>
          ))}
        </Table.Body>
      </Table> 
    )
  } else {
    return (
      <div>
        Time to go to the store :(
      </div>
    )
  }
}

export default ItemList; 
