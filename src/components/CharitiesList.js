import { React, useState, useEffect } from 'react';
import { useTable } from "react-table";

import spinner from '../assets/spinner.gif';

import * as Constants from '../constants';

import { getCharities } from '../services/CharityService';

export const Reacttable = () => {}

const columns = Constants.charity_columns;

function CharitiesList(props) {
    const [charities, setCharities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const tableInstance = useTable({ columns, data: charities });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance

    useEffect(() => {
        setIsLoading(true);

        getCharities(props.searchTerm).then(result => {
            setIsLoading(false);
                if(result[0]) {
                    return setCharities(result[0]);
                } else {
                    return setCharities([]);
                }
        });
    }, [props.searchTerm]);

    if(!isLoading) {
        return ( 
            <div className="charityList">
                <div className="charityHeader">Charities</div>
            <table {...getTableProps()}>
             <thead className='tableHeader'>
               {
               headerGroups.map(headerGroup => (
                 <tr {...headerGroup.getHeaderGroupProps()}>
                   {
                   headerGroup.headers.map(column => (
                     <th {...column.getHeaderProps()}>
                       {
                       column.render('Header')}
                     </th>
                   ))}
                 </tr>
               ))}
             </thead>
             {}
             <tbody {...getTableBodyProps()}>
               {
               rows.map(row => {
                 prepareRow(row)
                 return (
                   <tr {...row.getRowProps()}>
                     {
                     row.cells.map(cell => {
                       return (
                         <td {...cell.getCellProps()}>
                           {
                           cell.render('Cell')}
                         </td>
                       )
                     })}
                   </tr>
                 )
               })}
             </tbody>
           </table>
           </div>
            );
    } else {
        return (
            <div className="charityList">
                <img src={spinner} />
            </div>
        );
    }
}

export default CharitiesList