import React from 'react';

const ListItem = ({name,country,onListItem,item,likes}) => {
    return (
        <tr onClick={()=>onListItem(item)}>
          <td>{name}</td>
          <td>{country}</td>
          <td>{likes}</td>
        </tr>
    );
};

export default ListItem;
