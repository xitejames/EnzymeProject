import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TableContainer from '@material-ui/core/TableContainer'
import { orderBy } from 'lodash';

const CarTable = (props) => {
    const { selectedJourneys, journeyList, numSelected, rowCount, onSelectAllClick, onSingleSelectClick } = props;
    const [sortDirection, setSortDirection] = React.useState('asc');
    const [columnToSort, setColumnToSort] = React.useState('name');

    const rows = [
        { title: "Id", value: "id" },
        { title: "CarId", value: "car.id" },
        { title: "CarName", value: "car.name" },
        { title: "CarType", value: "carType" },
        { title: "JourneyDuration", start: "journeyStartTime", end:"journeyEndTime" },
    ];

    const handleOrderColumn = (columnToSort) => {
        setColumnToSort(columnToSort)
        const newSortDirection = sortDirection === "asc" ? "desc" : "asc"
        setSortDirection(newSortDirection);
    }

    const getDifferenceInTimestamps = (earlyTs, laterTs) => {
        const actualTs = laterTs - earlyTs
        const seconds = Math.floor(actualTs / 1000)
        const minutes = Math.floor(seconds / 60)
        const hours = Math.floor(minutes / 60)

        return (`${hours}:${minutes}:${seconds}`)
    }

    const orderByArray = () => {
        return orderBy(journeyList, columnToSort, sortDirection);
    }

    return (
        <TableContainer style={{ height: '100%' }}>
            <Table stickyHeader >
                <TableHead >
                    <TableRow >

                        <TableCell padding="checkbox">
                            <Checkbox
                                indeterminate={numSelected > 0 && numSelected < rowCount}
                                checked={rowCount > 0 && numSelected === rowCount}
                                onChange={onSelectAllClick}
                            />
                        </TableCell>

                        {rows.map((row) => {
                            console.log(row.start)
                            return (
                                <TableCell key={row.title} style={{ fontWeight: 'bold' }}>
                                    {row.title === "JourneyDuration"
                                    ?
                                    <TableSortLabel onClick={() => handleOrderColumn(row.end - row.start)}>
                                        {row.title}
                                    </TableSortLabel>
                                    : 
                                    <TableSortLabel onClick={() => handleOrderColumn(row.value)}>
                                        {row.title}
                                    </TableSortLabel>
                                    }
                                </TableCell>


                            );
                        })}

                    </TableRow>
                </TableHead>
                <TableBody style={{ height: 'calc(100% - 60px)' }}>
                    {orderByArray(journeyList).map((journey) => {
                        return (
                            <TableRow key={journey.id}>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selectedJourneys.indexOf(journey.id) !== -1}
                                        onChange={(event) => onSingleSelectClick(event, journey.id)}
                                    />
                                </TableCell>
                                <TableCell>{journey.id}</TableCell>
                                <TableCell>{journey.car.id}</TableCell>
                                <TableCell>{journey.car.name}</TableCell>
                                <TableCell>{journey.carType}</TableCell>
                                <TableCell>{getDifferenceInTimestamps(journey.journeyStartTime, journey.journeyEndTime)}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CarTable;