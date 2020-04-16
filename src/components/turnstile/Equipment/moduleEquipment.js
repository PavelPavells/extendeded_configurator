/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
//import ReactCSSTransitionGroup from 'react-transition-group';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/** ************* IMPORT MODULES FOR EQUIPMENT COMPONENT ************* */
//const EquipmentModal = lazy(() => import('./modals/equipmentModal'));
import EquipmentModal from './EquipmentModal/equipmentModal';

/** ************* IMPORT STYLES FOR MODULE BUTTONS IN EQUIPMENT COMPONENT ************* */
import './moduleEquipment.scss';

/** ************* IMPORT __UTILS__ FOR EQUIPMENT COMPONENT ************* */
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
        this.setState({ listEquipmentOne: !this.state.listEquipmentOne });
        let text = document.getElementsByClassName('text-remote')[0];
        text.classList.toggle('toggle-text');

        let icon = document.getElementsByClassName('block-info__icon1')[0];
        icon.classList.toggle('block-info__icon1-hover');

        let arrow = document.getElementsByClassName('arrow-remote')[0];
        arrow.classList.toggle('block-info__arrow-hover');
    }

    /** ************* HANDLE CHANGE MODAL TWO ************* */
    handleChangeModalWindowTwo = () => {
        this.setState({ listEquipmentTwo: !this.state.listEquipmentTwo });
        let text = document.getElementsByClassName('text-slats')[0];
        text.classList.toggle('toggle-text');

        let icon = document.getElementsByClassName('block-info__icon2')[0];
        icon.classList.toggle('block-info__icon2-hover');

        let arrow = document.getElementsByClassName('arrow-slats')[0];
        arrow.classList.toggle('block-info__arrow-hover');
    }

    /** ************* HANDLE CHANGE MODAL THREE ************* */
    handleChangeModalWindowThree = () => {
        this.setState({ listEquipmentThree: !this.state.listEquipmentThree });
        let text = document.getElementsByClassName('text-suply')[0];
        text.classList.toggle('toggle-text');

        let icon = document.getElementsByClassName('block-info__icon3')[0];
        icon.classList.toggle('block-info__icon3-hover');

        let arrow = document.getElementsByClassName('arrow-suply')[0];
        arrow.classList.toggle('block-info__arrow-hover');
    }

    /** ************* HANDLE CHANGE MODAL FOUR ************* */
    handleChangeModalWindowFour = () => {
        this.setState({ listEquipmentFour: !this.state.listEquipmentFour });
        let text = document.getElementsByClassName('text-awarding')[0];
        text.classList.toggle('toggle-text');

        let icon = document.getElementsByClassName('block-info__icon4')[0];
        icon.classList.toggle('block-info__icon4-hover');

        let arrow = document.getElementsByClassName('arrow-awarding')[0];
        arrow.classList.toggle('block-info__arrow-hover');
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

                    {/** ************* EQUIPMENT BLOCKS ************* */}
                    <div className='equipment-list__block'>
                        <div onClick={this.handleChangeModalWindowOne} className='block-info'>
                            <div className='block-info__wrap'>
                                <div className='block-info__icon1'></div>
                                <div className='block-info__text text-remote'>Пульты управления</div>
                                <div className='block-info__goods'>{turnstile.data.page_view.model_module_list.length}</div>
                                <div className='block-info__goods'>товаров</div>
                            </div>
                            <div className='block-info__arrow arrow-remote'></div>
                        </div>
                        {this.state.listEquipmentOne 
                            ? 
                                <div><EquipmentModal /></div> 
                            : 
                                null
                        }
                    </div>

                    {/** ************* EQUIPMENT BLOCKS ************* */}
                    <div className='equipment-list__block'>
                        <div onClick={this.handleChangeModalWindowTwo} className='block-info'>
                            <div className='block-info__wrap'>
                                <div className='block-info__icon2'></div>
                                <div className='block-info__text text-slats'>Преграждающие планки</div>
                                <div className='block-info__goods'>{turnstile.data.page_view.model_module_list.length}</div>
                                <div className='block-info__goods'>товаров</div>
                            </div>
                            <div className='block-info__arrow arrow-slats'></div>
                        </div>
                        {this.state.listEquipmentTwo 
                            ? 
                                <div><EquipmentModal /></div> 
                            : 
                                null
                        }
                    </div>

                    {/** ************* EQUIPMENT BLOCKS ************* */}
                    <div className='equipment-list__block'>
                        <div onClick={this.handleChangeModalWindowThree} className='block-info'>
                            <div className='block-info__wrap'>
                                <div className='block-info__icon3'></div>
                                <div className='block-info__text text-suply'>Блоки питания</div>
                                <div className='block-info__goods'>{turnstile.data.page_view.model_module_list.length}</div>
                                <div className='block-info__goods'>товара</div>
                            </div>
                            <div className='block-info__arrow arrow-suply'></div>
                        </div>
                        {this.state.listEquipmentThree 
                            ? 
                                <div><EquipmentModal /></div> 
                            : 
                                null
                        }
                    </div>

                    {/** ************* EQUIPMENT BLOCKS ************* */}
                    <div className='equipment-list__block'>
                        <div onClick={this.handleChangeModalWindowFour} className='block-info'>
                            <div className='block-info__wrap'>
                                <div className='block-info__icon4'></div>
                                <div className='block-info__text text-awarding'>Ограждения прохода и секции «Антипаника»</div>
                                <div className='block-info__goods'>{turnstile.data.page_view.model_module_list.length}</div>
                                <div className='block-info__goods'>товара</div>
                            </div>
                            <div className='block-info__arrow arrow-awarding'></div>
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