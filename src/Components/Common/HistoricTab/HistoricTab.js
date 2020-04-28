import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import CarTable from '../CarTable';
import { addAllToJourneyList } from '../../../Redux/Actions/JourneyActions';
import { connect } from 'react-redux';

class HistoricTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedJourneys: [],
            compareList: [],
            rowCount: 0,
            numSelected: 0,
        }
    }

    fetchDevices = () => {
        const { addAllToJourneyList } = this.props;
        fetch('http://localhost:4000/journeys')
            .then(res => res.json())
            .then(journeyList => {
                addAllToJourneyList(journeyList);
                this.setState({ rowCount: journeyList.length });
            });
    }

    handleSelectAllClick = (event) => {
        const { journeyList } = this.props;
        if (event.target.checked) {
            const newSelectedIds = journeyList.map((n) => n.id);
            this.setState({ selectedJourneys: newSelectedIds, numSelected: newSelectedIds.length });
        } else {
            this.setState({ selectedJourneys: [], numSelected: 0 });
        }
    }

    handleSingleSelectClick = (event, id) => {
        const { selectedJourneys, numSelected } = this.state;
        if (event.target.checked) {
            this.setState({ selectedJourneys: [...selectedJourneys, id], numSelected: numSelected + 1 });
        } else {
            const journeyListWithRemovedId = selectedJourneys.filter((deviceId) => deviceId !== id);
            this.setState({ selectedJourneys: journeyListWithRemovedId, numSelected: numSelected - 1 });
        }
    }

    // addToCompare = (event, id) => {
    //     const { journeyList, compareList } = this.state;
    //     const allDevicesToCompare = journeyList.filter((device) => device.id === id);
    //     this.setState({ compareList: [...compareList, allDevicesToCompare] })
    // }

    componentDidMount() {
        this.fetchDevices();
    }

    render() {
        const { numSelected, rowCount, selectedJourneys } = this.state;
        const { journeyList } = this.props;
        return (
            <Paper style={{ height: '100%', width: '100%' }}>
                <CarTable
                    selectedJourneys={selectedJourneys}
                    journeyList={journeyList}
                    onSelectAllClick={this.handleSelectAllClick}
                    onSingleSelectClick={this.handleSingleSelectClick}
                    numSelected={numSelected}
                    rowCount={rowCount}
                />
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    journeyList: state.Journeys.journeyList,
});

const mapDispatchToProps = dispatch => ({
    addAllToJourneyList: journeys => dispatch(addAllToJourneyList(journeys)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoricTab); 