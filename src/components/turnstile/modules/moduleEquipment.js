/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/** ************* IMPORT MODULES FOR TURNSTILE COMPONENT ************* */
//const EquipmentModal = lazy(() => import('./modals/equipmentModal'));
import EquipmentModal from './modals/equipmentModal';

/** ************* IMPORT STYLES FOR MODULE BUTTONS IN TURNSTILE COMPONENT ************* */
import './styles/moduleEquipment.scss';

/** ************* IMPORT __UTILS__ FOR TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

class ModuleEquipment extends React.Component {

    state = {
        listOne: false,
        listTwo: false,
        listThree: false,
        listFour: false
    }

    /** ************* FETCHING DATA ************* */
    //componentDidMount() {
    //    this.props.fetchDataTurnstile();
    //}

    /** ************* REDUCE THE NUMBER OF SELECTED ************* */
    handleMinusOptions = () => {
        //const { page_view } = this.props.data.turnstile.data;
        //console.log(page_view);
        // some code
    }

    /** ************* INCREASE THE NUMBER OF SELECTED ************* */
    handlePlusOptions = () => {
        //const { page_view } = this.props.data.turnstile.data;
        //console.log(page_view);
        // some code
    }

    /** ************* HANDLE CHANGE MODAL ONE ************* */
    handleChangeModalWindowOne = () => {
        this.setState({ listOne: !this.state.listOne })
    }

    /** ************* HANDLE CHANGE MODAL TWO ************* */
    handleChangeModalWindowTwo = () => {
        this.setState({ listTwo: !this.state.listTwo })
    }

    /** ************* HANDLE CHANGE MODAL THREE ************* */
    handleChangeModalWindowThree = () => {
        this.setState({ listThree: !this.state.listThree })
    }

    /** ************* HANDLE CHANGE MODAL FOUR ************* */
    handleChangeModalWindowFour = () => {
        this.setState({ listFour: !this.state.listFour })
    }

    render() {
        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        //console.log(this.props.data)
        if(turnstile.data.length === 0 && !isFetching) {
            return <Suspense fallback={<div><Loader /></div>}></Suspense>
        }
        return (

            /** ************* MODULE EQUIPMENT ************* */
            <div className='equipment'>
                <p className='equipment-description'>Дополнительное оборудование</p>
                <div className='equipment-list'>
                    {/*{[1, 2, 3, 4].map((index, key) => (
                        <div className='equipment-list__block'>{index}</div>
                    ))}*/}
                    <div onClick={this.handleChangeModalWindowOne} className='equipment-list__block'>
                        <div className='block'>
                            <div className='equipment-list__block-icon1'></div>
                            <div className='equipment-list__block-text'>Пульты управления</div>
                            <div className='equipment-list__block-goods'>14</div>
                            <div className='equipment-list__block-goods'>товаров</div>
                        </div>
                        <div className='equipment-list__block-arrow'></div>
                    </div>
                    {this.state.listOne 
                        ? 
                            <div><EquipmentModal /></div> 
                        : 
                            null
                    }
                    <div onClick={this.handleChangeModalWindowTwo} className='equipment-list__block'>
                        <div className='block'>
                            <div className='equipment-list__block-icon2'></div>
                            <div className='equipment-list__block-text'>Преграждающие планки</div>
                            <div className='equipment-list__block-goods'>5</div>
                            <div className='equipment-list__block-goods'>товаров</div>
                        </div>
                        <div className='equipment-list__block-arrow'></div>
                    </div>
                    {this.state.listTwo 
                        ? 
                            <div><EquipmentModal /></div> 
                        : 
                            null
                    }
                    <div onClick={this.handleChangeModalWindowThree} className='equipment-list__block'>
                        <div className='block'>
                            <div className='equipment-list__block-icon3'></div>
                            <div className='equipment-list__block-text'>Блоки питания</div>
                            <div className='equipment-list__block-goods'>3</div>
                            <div className='equipment-list__block-goods'>товара</div>
                        </div>
                        <div className='equipment-list__block-arrow'></div>
                    </div>
                    {this.state.listThree 
                        ? 
                            <div><EquipmentModal /></div> 
                        : 
                            null
                    }
                    <div onClick={this.handleChangeModalWindowFour} className='equipment-list__block'>
                        <div className='block'>
                            <div className='equipment-list__block-icon4'></div>
                            <div className='equipment-list__block-text'>Ограждения прохода и секции «Антипаника»</div>
                            <div className='equipment-list__block-goods'>4</div>
                            <div className='equipment-list__block-goods'>товара</div>
                        </div>
                        <div className='equipment-list__block-arrow'></div>
                    </div>
                    {this.state.listFour 
                        ? 
                            <div><EquipmentModal /></div> 
                        : 
                            null
                    }
                </div>
            </div>
        )
    }
}
ModuleEquipment.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleEquipment);