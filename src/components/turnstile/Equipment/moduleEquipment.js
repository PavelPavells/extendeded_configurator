/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
//import ReactCSSTransitionGroup from 'react-transition-group';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/** ************* IMPORT MODULES FOR TURNSTILE COMPONENT ************* */
//const EquipmentModal = lazy(() => import('./modals/equipmentModal'));
import EquipmentModal from './EquipmentModal/equipmentModal';

/** ************* IMPORT STYLES FOR MODULE BUTTONS IN TURNSTILE COMPONENT ************* */
import './moduleEquipment.scss';

/** ************* IMPORT __UTILS__ FOR TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

class ModuleEquipment extends React.Component {

    state = {
        listEquipmentOne: false,
        listEquipmentTwo: false,
        listEquipmentThree: false,
        listEquipmentFour: false
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
        this.setState({ listEquipmentOne: !this.state.listEquipmentOne })
    }

    /** ************* HANDLE CHANGE MODAL TWO ************* */
    handleChangeModalWindowTwo = () => {
        this.setState({ listEquipmentTwo: !this.state.listEquipmentTwo })
    }

    /** ************* HANDLE CHANGE MODAL THREE ************* */
    handleChangeModalWindowThree = () => {
        this.setState({ listEquipmentThree: !this.state.listEquipmentThree })
    }

    /** ************* HANDLE CHANGE MODAL FOUR ************* */
    handleChangeModalWindowFour = () => {
        this.setState({ listEquipmentFour: !this.state.listEquipmentFour })
    }

    render() {
        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        console.log(this.props.data)
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
                        <div className='block-info'>
                            <div className='block-info__wrap'>
                                <div className='block-info__icon1'></div>
                                <div className='block-info__text'>Пульты управления</div>
                                <div className='block-info__goods'>14</div>
                                <div className='block-info__goods'>товаров</div>
                            </div>
                            <div className='block-info__arrow'></div>
                        </div>
                        {this.state.listEquipmentOne 
                            ? 
                                <div><EquipmentModal /></div> 
                            : 
                                null
                        }
                    </div>
                    <div onClick={this.handleChangeModalWindowTwo} className='equipment-list__block'>
                        <div className='block-info'>
                            <div className='block-info__wrap'>
                                <div className='block-info__icon2'></div>
                                <div className='block-info__text'>Преграждающие планки</div>
                                <div className='block-info__goods'>5</div>
                                <div className='block-info__goods'>товаров</div>
                            </div>
                            <div className='block-info__arrow'></div>
                        </div>
                        {this.state.listEquipmentTwo 
                            ? 
                                <div><EquipmentModal /></div> 
                            : 
                                null
                        }
                    </div>
                    <div onClick={this.handleChangeModalWindowThree} className='equipment-list__block'>
                        <div className='block-info'>
                            <div className='block-info__wrap'>
                                <div className='block-info__icon3'></div>
                                <div className='block-info__text'>Блоки питания</div>
                                <div className='block-info__goods'>3</div>
                                <div className='block-info__goods'>товара</div>
                            </div>
                            <div className='block-info__arrow'></div>
                        </div>
                        {this.state.listEquipmentThree 
                            ? 
                                <div><EquipmentModal /></div> 
                            : 
                                null
                        }
                    </div>
                    <div onClick={this.handleChangeModalWindowFour} className='equipment-list__block'>
                        <div className='block-info'>
                            <div className='block-info__wrap'>
                                <div className='block-info__icon4'></div>
                                <div className='block-info__text'>Ограждения прохода и секции «Антипаника»</div>
                                <div className='block-info__goods'>4</div>
                                <div className='block-info__goods'>товара</div>
                            </div>
                            <div className='block-info__arrow'></div>
                        </div>
                        {this.state.listEquipmentFour 
                            ? 
                                <div><EquipmentModal /></div> 
                            : 
                                null
                        }
                    </div>
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