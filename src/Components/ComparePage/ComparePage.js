import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import DeviceCard from '../Common/DeviceCard';

class ComparePage extends Component {
    render() {
        const { deviceList, compareList } = this.props;
        return(
            <Container component="main" style={{width: '80%'}}>

                {deviceList.map((currentDevice) => {
                    if(compareList.includes(currentDevice.id)){
                        return <DeviceCard key={currentDevice.id} deviceData={currentDevice} />
                    }
                    return null;
                })}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    compareList: state.compare.compareList,
    deviceList: state.device.deviceList,
});

export default connect(mapStateToProps)(ComparePage); 
