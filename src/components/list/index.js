import React from 'react';
import ListItem from "./list-item";

const List = ({items ,onListItem}) => {
    return (
        <table className="cities-container">
            <tbody>
            <tr>
                <th>Name</th>
                <th>country</th>
                <th>likes</th>
            </tr>
            {
                items.map((i,index) => {
                    return (
                        <ListItem key={index} name={i.name}
                                  country={i.country}
                                  onListItem={onListItem}
                                  item={i}
                                  likes={i.detail ? i.detail.likes :0}/>
                    )
                })
            }
            </tbody>
        </table>
    );
};

export default List;
