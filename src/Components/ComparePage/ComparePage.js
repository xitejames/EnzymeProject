import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import DeviceCard from '../Common/DeviceCard';
import { removeFromCompareList } from '../../Redux/Actions/CompareActions';

class ComparePage extends Component {
    render() {
        const { deviceList, compareList, removeFromCompareList } = this.props;
        return(
            <Container component="main" style={{width: '80%', height: '100%'}}>

                {deviceList.map((currentDevice) => {
                    if(compareList.includes(currentDevice.id)){
                        return <DeviceCard key={currentDevice.id} deviceData={currentDevice} removeFromCompareList={removeFromCompareList}/>
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

const mapDispatchToProps = dispatch => ({
    removeFromCompareList: id => dispatch(removeFromCompareList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComparePage); 
