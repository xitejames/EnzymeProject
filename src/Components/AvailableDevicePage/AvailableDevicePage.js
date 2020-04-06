import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import LaptopIcon from '@material-ui/icons/Laptop';
import DevicesIcon from '@material-ui/icons/Devices';
import DeviceTable from '../Common/DeviceTable';
import { addToCompareList } from '../../Redux/Actions/CompareActions';
import { addAllToDeviceList } from '../../Redux/Actions/DeviceActions';
import { connect } from 'react-redux';

class AvailableDevicePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDevices: [],
            compareList: [],
            rowCount: 0,
            numSelected: 0,
        }
    }

    fetchDevices = () => {
        const { addAllToDeviceList } = this.props;
        fetch('http://localhost:4000/Devices')
            .then(res => res.json())
            .then(deviceList => {
                console.log(deviceList)
                addAllToDeviceList(deviceList);
                this.setState({ rowCount: deviceList.length });
            });
    }

    getDeviceIcon = (deviceType) => {
        switch (deviceType) {
            case 'laptop':
                return <LaptopIcon />;
            case 'camera':
                return <CameraAltIcon />;
            case 'mobilePhone':
                return <SmartphoneIcon />;
            default:
                return <DevicesIcon />
        }
    }

    handleSelectAllClick = (event) => {
        const { deviceList } = this.props;
        if (event.target.checked) {
            const newSelectedIds = deviceList.map((n) => n.id);
            this.setState({ selectedDevices: newSelectedIds, numSelected: newSelectedIds.length });
        } else {
            this.setState({ selectedDevices: [], numSelected: 0 });
        }
    }

    handleSingleSelectClick = (event, id) => {
        const { selectedDevices, numSelected } = this.state;
        if (event.target.checked) {
            this.setState({ selectedDevices: [...selectedDevices, id], numSelected: numSelected + 1 });
        } else {
            const deviceListWithRemovedId = selectedDevices.filter((deviceId) => deviceId !== id);
            this.setState({ selectedDevices: deviceListWithRemovedId, numSelected: numSelected - 1 });
        }
    }

    addToCompare = (event, id) => {
        const { deviceList, compareList } = this.state;
        const allDevicesToCompare = deviceList.filter((device) => device.id === id);
        this.setState({ compareList: [...compareList, allDevicesToCompare] })
    }

    componentDidMount() {
        this.fetchDevices();
    }

    render() {
        const { numSelected, rowCount, selectedDevices } = this.state;
        const { deviceList } = this.props;
        return (
            <Container component="main" style={{ width: '80%', height: '95%' }}>
                <Paper style={{ height: '100%' }}>
                    <DeviceTable
                        selectedDevices={selectedDevices}
                        deviceList={deviceList}
                        getDeviceIcon={this.getDeviceIcon}
                        onSelectAllClick={this.handleSelectAllClick}
                        onSingleSelectClick={this.handleSingleSelectClick}
                        numSelected={numSelected}
                        rowCount={rowCount}
                        addToCompare={this.props.addToCompareList}
                    />
                </Paper>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    compare: state.compare,
    deviceList: state.device.deviceList,
});

const mapDispatchToProps = dispatch => ({
    addToCompareList: idArray => dispatch(addToCompareList(idArray)),
    addAllToDeviceList: deviceArray => dispatch(addAllToDeviceList(deviceArray)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AvailableDevicePage); 