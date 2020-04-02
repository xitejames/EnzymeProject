import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { orderBy } from 'lodash';
import CustomButton from '../../Common/CustomButton';

const DeviceTable = (props) => {
    const { selectedDevices, deviceList, getDeviceIcon, numSelected, rowCount, onSelectAllClick, onSingleSelectClick, addToCompare } = props;
    const [sortDirection, setSortDirection] = React.useState('asc');
    const [columnToSort, setColumnToSort] = React.useState('name');

    const rows = [
        { title: "Name", value: "name" },
        { title: "Availability", value: "available" },
        { title: "Type", value: "type" },
        { title: "Compare", value: "id" }
    ];

    const handleOrderColumn = (columnToSort) => {
        setColumnToSort(columnToSort)
        const newSortDirection = sortDirection === "asc" ? "desc" : "asc"
        setSortDirection(newSortDirection);
    }

    const orderByArray = () => {
        return orderBy(deviceList, columnToSort, sortDirection);
    }

    return (
        <Table>
            <TableHead>
                <TableRow style={{ backgroundColor: 'cyan', }}>

                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </TableCell>
                    {/* <TableCell style={{ fontWeight: 'bold' }}>Device Name</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Device Availability</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Device Type</TableCell> */}
                    {rows.map((row) => {
                        return (
                            <TableCell key={row.title} style={{ fontWeight: 'bold' }}>
                                <TableSortLabel onClick={() => handleOrderColumn(row.value)}>
                                    {row.title}
                                </TableSortLabel>
                            </TableCell>


                        );
                    })}

                </TableRow>
            </TableHead>
            <TableBody>
                {orderByArray(deviceList).map((device) => {
                    return (
                        <TableRow key={device.id}>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={selectedDevices.indexOf(device.id) !== -1}
                                    onChange={(event) => onSingleSelectClick(event, device.id)}
                                />
                            </TableCell>
                            <TableCell>{device.name}</TableCell>
                            <TableCell>{device.available ? 'available' : 'unavailable'}</TableCell>
                            <TableCell>{getDeviceIcon(device.type)}</TableCell>
                            <TableCell>
                                <CustomButton title="Compare" onClick={(event) => addToCompare(event, device.id)} />      
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

export default DeviceTable;