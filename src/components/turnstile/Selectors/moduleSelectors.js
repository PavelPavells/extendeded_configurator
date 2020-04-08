/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { 
    fetchDataTurnstile, 
    togglePopupWindowTurnstile 
} from '../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE SELECTORS IN TURNSTILE COMPONENT ************* */
import './moduleSelectors.scss';

/** ************* IMPORT __UTILS__ FOR TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

/** ************* IMPORT POPUP COMPONENT ************* */
const PopUp = lazy(() => import('../../popup/popup'));


class ModuleSelectors extends React.Component {
    
    state = {
        modal: false,
        selectOne: 0,
        selectTwo: 0,
        selectThree: 0,
        selectFour: 0,
        selectFive: 0,
        selectSix: 0,
        selectSeven: 0,
        selectEight: 0,
        defaultSelect: false
    }

    /** ************* FETCHING DATA ************* */
    //componentDidMount() {
        //const { page_view } = this.props.data.turnstile.data;
        //console.log(page_view)
        //let data = {
        //    button_seria_state: page_view.btn_seria,
        //    button_corpse_state: page_view.btn_corpse,
        //    selectOne: 0,
        //    selectTwo: 0,
        //    selectThree: 0,
        //    selectFour: 0,
        //    selectFive: 0,
        //    selectSix: 0,
        //    selectSeven: 0,
        //    selectEight: 0,
        //}
        //this.props.fetchDataTurnstile(data);
    //}

    /** ************* TOGGLE MODAL ************* */
    handleModal = () => {
        this.props.togglePopupWindowTurnstile();
    }

    /** ************* CHOICE FIRST SELECTOR ************* */
    handleClickZeroSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({ 
            selectOne: +!this.state.selectOne 
        }, () => {
            let data = {
                trigger: 5,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                selectOne: this.state.selectOne,
                selectTwo: this.state.selectTwo,
                selectThree: this.state.selectThree,
                selectFour: this.state.selectFour,
                selectFive: this.state.selectFive,
                selectSix: this.state.selectSix,
                selectSeven: this.state.selectSeven,
                selectEight: this.state.selectEight
            }
            this.props.fetchDataTurnstile(data);
        })
    }

    /** ************* CHOICE TWO SELECTOR ************* */
    handleClickOneSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({ 
            selectTwo: +!this.state.selectTwo 
        }, () => {
            let data = {
                trigger: 6,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                selectOne: this.state.selectOne,
                selectTwo: this.state.selectTwo,
                selectThree: this.state.selectThree,
                selectFour: this.state.selectFour,
                selectFive: this.state.selectFive,
                selectSix: this.state.selectSix,
                selectSeven: this.state.selectSeven,
                selectEight: this.state.selectEight
            }
            this.props.fetchDataTurnstile(data);
        })
    }

    /** ************* CHOICE THREE SELECTOR ************* */
    handleClickTwoSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({ 
            selectThree: +!this.state.selectThree 
        }, () => {
            let data = {
                trigger: 7,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                selectOne: this.state.selectOne,
                selectTwo: this.state.selectTwo,
                selectThree: this.state.selectThree,
                selectFour: this.state.selectFour,
                selectFive: this.state.selectFive,
                selectSix: this.state.selectSix,
                selectSeven: this.state.selectSeven,
                selectEight: this.state.selectEight
            }
            this.props.fetchDataTurnstile(data);
        })
    }

    /** ************* CHOICE FOUR SELECTOR ************* */
    handleClickThreeSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({ 
            selectFour: +!this.state.selectFour 
        }, () => {
            let data = {
                trigger: 8,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                selectOne: this.state.selectOne,
                selectTwo: this.state.selectTwo,
                selectThree: this.state.selectThree,
                selectFour: this.state.selectFour,
                selectFive: this.state.selectFive,
                selectSix: this.state.selectSix,
                selectSeven: this.state.selectSeven,
                selectEight: this.state.selectEight
            }
            this.props.fetchDataTurnstile(data);
        })
    }

    /** ************* CHOICE FIVE SELECTOR ************* */
    handleClickFourSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({ 
            selectFive: +!this.state.selectFive 
        }, () => {
            let data = {
                trigger: 9,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                selectOne: this.state.selectOne,
                selectTwo: this.state.selectTwo,
                selectThree: this.state.selectThree,
                selectFour: this.state.selectFour,
                selectFive: this.state.selectFive,
                selectSix: this.state.selectSix,
                selectSeven: this.state.selectSeven,
                selectEight: this.state.selectEight
            }
            this.props.fetchDataTurnstile(data);
        })
    }

    /** ************* CHOICE SIX SELECTOR ************* */
    handleClickFiveSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({ 
            selectSix: +!this.state.selectSix 
        }, () => {
            let data = {
                trigger: 10,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                selectOne: this.state.selectOne,
                selectTwo: this.state.selectTwo,
                selectThree: this.state.selectThree,
                selectFour: this.state.selectFour,
                selectFive: this.state.selectFive,
                selectSix: this.state.selectSix,
                selectSeven: this.state.selectSeven,
                selectEight: this.state.selectEight
            }
            this.props.fetchDataTurnstile(data);
        })
    }

    /** ************* CHOICE SEVEN SELECTOR ************* */
    handleClickSixSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({ 
            selectSeven: +!this.state.selectSeven
        }, () => {
            let data = {
                trigger: 11,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                selectOne: this.state.selectOne,
                selectTwo: this.state.selectTwo,
                selectThree: this.state.selectThree,
                selectFour: this.state.selectFour,
                selectFive: this.state.selectFive,
                selectSix: this.state.selectSix,
                selectSeven: this.state.selectSeven,
                selectEight: this.state.selectEight
            }
            this.props.fetchDataTurnstile(data);
        })
    }

    /** ************* CHOICE EIGHT SELECTOR ************* */
    handleClickSevenSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({ 
            selectEight: +!this.state.selectEight 
        }, () => {
            let data = {
                trigger: 12,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                selectOne: this.state.selectOne,
                selectTwo: this.state.selectTwo,
                selectThree: this.state.selectThree,
                selectFour: this.state.selectFour,
                selectFive: this.state.selectFive,
                selectSix: this.state.selectSix,
                selectSeven: this.state.selectSeven,
                selectEight: this.state.selectEight
            }
            this.props.fetchDataTurnstile(data);
        })
    }
    render() {
        
        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        //console.log(turnstile.data.page_view)
        if (turnstile.data.length === 0 && !isFetching) {
            return <Suspense fallback={<div><Loader /></div>}></Suspense>
        }
        console.log('selector 1 : ' + turnstile.data.page_view ? turnstile.data.page_view.module_selectors[0].state : null)
        console.log('selector 2 : ' + turnstile.data.page_view ? turnstile.data.page_view.module_selectors[1].state : null)
        console.log('selector 3 : ' + turnstile.data.page_view ? turnstile.data.page_view.module_selectors[2].state : null)
        console.log('selector 4 : ' + turnstile.data.page_view ? turnstile.data.page_view.module_selectors[3].state : null)
        console.log('selector 5 : ' + turnstile.data.page_view ? turnstile.data.page_view.module_selectors[4].state : null)
        console.log('selector 6 : ' + turnstile.data.page_view ? turnstile.data.page_view.module_selectors[5].state : null)
        console.log('selector 7 : ' + turnstile.data.page_view ? turnstile.data.page_view.module_selectors[6].state : null)
        console.log('selector 8 : ' + turnstile.data.page_view ? turnstile.data.page_view.module_selectors[7].state : null)
        return (

            /** ************* MODULE SELECTORS ************* */
            <div className='selectors'>
                <div className='selectors-text'>Дополнительные модули</div>
                {turnstile.data.page_view.module_selectors.slice(0, 1).map((index, key) => {
                    if(index.state === -1) {
                            return (
                                <div key={index.index} className='selectors-module none'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon ep'></div>
                                        <div className='selectors-module__text'>Универсальный сетевой контроллер расширения EP-2000</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>
                                                <div onClick={this.handleModal}>ПОДРОБНЕЕ</div>
                                                {turnstile.modal ? <PopUp /> : null}
                                            </div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                            {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'ep2000' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                        </div>
                                        <div className="onoffswitch">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch" 
                                                className="onoffswitch-checkbox" 
                                                id="header-checkbox"
                                                onClick={this.handleClickZeroSelect}
                                                checked={false}
                                            />
                                            <label className="onoffswitch-label" htmlFor="header-checkbox">
                                                <span className="onoffswitch-inner"></span>
                                                <span className="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index.index} className='selectors-module'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon ep'></div>
                                        <div className='selectors-module__text'>Универсальный сетевой контроллер расширения EP-2000</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>
                                                <div onClick={this.handleModal}>ПОДРОБНЕЕ</div>
                                                {turnstile.modal ? <PopUp /> : null}
                                            </div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                            {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'ep2000' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                        </div>
                                        <div className="onoffswitch">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch" 
                                                className="onoffswitch-checkbox" 
                                                id="header-checkbox"
                                                onClick={this.handleClickZeroSelect}
                                                value={turnstile.data.page_view.module_selectors[0].state}
                                            />
                                            <label className="onoffswitch-label" htmlFor="header-checkbox">
                                                <span className="onoffswitch-inner"></span>
                                                <span className="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })  
                }

                {turnstile.data.page_view.module_selectors.slice(1, 2).map((index, key) => {
                    if(index.state === -1) {
                            return (
                                <div key={index.index} className='selectors-module none'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon emmarine'></div>
                                        <div className='selectors-module__text'>RFID идентификаторы EMMarine 125kHZ</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>
                                                <div onClick={this.handleModal}>ПОДРОБНЕЕ</div>
                                                {turnstile.modal ? <PopUp turnstile={turnstile} /> : null}
                                            </div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                            {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'emarine' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                            {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'emarine' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                            {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'emarine' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                        </div>
                                        <div className="onoffswitch2">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch2" 
                                                className="onoffswitch2-checkbox" 
                                                id="header2-checkbox" 
                                                onClick={this.handleClickOneSelect}
                                                checked={false}
                                            />
                                            <label className="onoffswitch2-label" htmlFor="header2-checkbox">
                                                <span className="onoffswitch2-inner"></span>
                                                <span className="onoffswitch2-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index.index} className='selectors-module'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon emmarine'></div>
                                        <div className='selectors-module__text'>RFID идентификаторы EMMarine 125kHZ</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>
                                                <div onClick={this.handleModal}>ПОДРОБНЕЕ</div>
                                                {turnstile.modal ? <PopUp turnstile={turnstile} /> : null}
                                            </div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                            {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'emarine' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                            {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'emarine' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                            {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'emarine' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                        </div>
                                        <div className="onoffswitch2">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch2" 
                                                className="onoffswitch2-checkbox" 
                                                id="header2-checkbox" 
                                                onClick={this.handleClickOneSelect}
                                                value={turnstile.data.page_view.module_selectors[1].state}
                                            />
                                            <label className="onoffswitch2-label" htmlFor="header2-checkbox">
                                                <span className="onoffswitch2-inner"></span>
                                                <span className="onoffswitch2-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })  
                }

                {turnstile.data.page_view.module_selectors.slice(2, 3).map((index, key) => {
                    if(index.state === -1) {
                            return (
                                <div key={index.index} className='selectors-module none'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon mifire'></div>
                                        <div className='selectors-module__text'>RFID идентификаторы Mifire 13.56MHz</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>
                                                <div onClick={this.handleModal}>ПОДРОБНЕЕ</div>
                                                {turnstile.modal ? <PopUp /> : null}
                                            </div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                        {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'mifare' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                        {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'mifare' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                        {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'mifare' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                        </div>
                                        <div className="onoffswitch3">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch3" 
                                                className="onoffswitch3-checkbox" 
                                                id="header3-checkbox"
                                                onClick={this.handleClickTwoSelect}
                                                checked={false}
                                            />
                                            <label className="onoffswitch3-label" htmlFor="header3-checkbox">
                                                <span className="onoffswitch3-inner"></span>
                                                <span className="onoffswitch3-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index.index} className='selectors-module'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon mifire'></div>
                                        <div className='selectors-module__text'>RFID идентификаторы Mifire 13.56MHz</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>
                                                <div onClick={this.handleModal}>ПОДРОБНЕЕ</div>
                                                {turnstile.modal ? <PopUp /> : null}
                                            </div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                        {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'mifare' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                        {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'mifare' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                        {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'mifare' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                        </div>
                                        <div className="onoffswitch3">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch3" 
                                                className="onoffswitch3-checkbox" 
                                                id="header3-checkbox"
                                                onClick={this.handleClickTwoSelect}
                                                value={turnstile.data.page_view.module_selectors[2].state} 
                                            />
                                            <label className="onoffswitch3-label" htmlFor="header3-checkbox">
                                                <span className="onoffswitch3-inner"></span>
                                                <span className="onoffswitch3-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })  
                }

                {turnstile.data.page_view.module_selectors.slice(3, 4).map((index, key) => {
                    if(index.state === -1) {
                            return (
                                <div key={index.index} className='selectors-module none'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon bio'></div>
                                        <div className='selectors-module__text'>Биометрическая идентификация по отпечаткам пальцев</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>
                                                <div onClick={this.handleModal}>ПОДРОБНЕЕ</div>
                                                {turnstile.modal ? <PopUp /> : null}
                                            </div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                            {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'fingerprint' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                            {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'fingerprint' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                            {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'fingerprint' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                            {turnstile.data.page_view.model_module_list[4] !== undefined && turnstile.data.page_view.model_module_list[4].name === 'fingerprint' && '+ ' + turnstile.data.page_view.model_module_list[4].price}
                                        </div>
                                        <div className="onoffswitch4">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch4" 
                                                className="onoffswitch4-checkbox" 
                                                id="header4-checkbox" 
                                                onClick={this.handleClickThreeSelect}
                                                checked={false}  
                                            />
                                            <label className="onoffswitch4-label" htmlFor="header4-checkbox">
                                                <span className="onoffswitch4-inner"></span>
                                                <span className="onoffswitch4-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index.index} className='selectors-module'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon bio'></div>
                                        <div className='selectors-module__text'>Биометрическая идентификация по отпечаткам пальцев</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>
                                                <div onClick={this.handleModal}>ПОДРОБНЕЕ</div>
                                                {turnstile.modal ? <PopUp /> : null}
                                            </div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                            {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'fingerprint' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                            {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'fingerprint' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                            {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'fingerprint' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                            {turnstile.data.page_view.model_module_list[4] !== undefined && turnstile.data.page_view.model_module_list[4].name === 'fingerprint' && '+ ' + turnstile.data.page_view.model_module_list[4].price}
                                        </div>
                                        <div className="onoffswitch4">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch4" 
                                                className="onoffswitch4-checkbox" 
                                                id="header4-checkbox" 
                                                onClick={this.handleClickThreeSelect}
                                                value={turnstile.data.page_view.module_selectors[3].state}     
                                            />
                                            <label className="onoffswitch4-label" htmlFor="header4-checkbox">
                                                <span className="onoffswitch4-inner"></span>
                                                <span className="onoffswitch4-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })  
                }

                {turnstile.data.page_view.module_selectors.slice(4, 5).map((index, key) => {
                    if(index.state === -1) {
                            return (
                                <div key={index.index} className='selectors-module none'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon time'></div>
                                        <div className='selectors-module__text'>Информационный дисплей учета рабочего времени</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>ПОДРОБНЕЕ</div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                            {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                            {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                            {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                            {turnstile.data.page_view.model_module_list[4] !== undefined && turnstile.data.page_view.model_module_list[4].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[4].price}
                                            {turnstile.data.page_view.model_module_list[5] !== undefined && turnstile.data.page_view.model_module_list[5].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[5].price}
                                        </div>
                                        <div className="onoffswitch5">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch5" 
                                                className="onoffswitch5-checkbox" 
                                                id="header5-checkbox" 
                                                onChange={this.handleClickFourSelect}
                                                checked={false}    
                                            />
                                            <label className="onoffswitch5-label" htmlFor="header5-checkbox">
                                                <span className="onoffswitch5-inner"></span>
                                                <span className="onoffswitch5-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index.index} className='selectors-module'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon time'></div>
                                        <div className='selectors-module__text'>Информационный дисплей учета рабочего времени</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>ПОДРОБНЕЕ</div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                            {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                            {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                            {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                            {turnstile.data.page_view.model_module_list[4] !== undefined && turnstile.data.page_view.model_module_list[4].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[4].price}
                                            {turnstile.data.page_view.model_module_list[5] !== undefined && turnstile.data.page_view.model_module_list[5].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[5].price}
                                        </div>
                                        <div className="onoffswitch5">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch5" 
                                                className="onoffswitch5-checkbox" 
                                                id="header5-checkbox" 
                                                onClick={this.handleClickFourSelect}
                                                value={turnstile.data.page_view.module_selectors[4].state}     
                                            />
                                            <label className="onoffswitch5-label" htmlFor="header5-checkbox">
                                                <span className="onoffswitch5-inner"></span>
                                                <span className="onoffswitch5-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })  
                }

                {turnstile.data.page_view.module_selectors.slice(5, 6).map((index, key) => {
                    if(index.state === -1) {
                            return (
                                <div key={index.index} className='selectors-module none'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon one-visits'></div>
                                        <div className='selectors-module__text'>Контроль разовых посещений по 2D штрих-кодам</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>ПОДРОБНЕЕ</div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                            {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                            {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                            {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                            {turnstile.data.page_view.model_module_list[4] !== undefined && turnstile.data.page_view.model_module_list[4].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[4].price}
                                            {turnstile.data.page_view.model_module_list[5] !== undefined && turnstile.data.page_view.model_module_list[5].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[5].price}
                                            {turnstile.data.page_view.model_module_list[6] !== undefined && turnstile.data.page_view.model_module_list[6].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[6].price}
                                        </div>
                                        <div className="onoffswitch6">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch6" 
                                                className="onoffswitch6-checkbox" 
                                                id="header6-checkbox" 
                                                onChange={this.handleClickFiveSelect}
                                                checked={false}     
                                            />
                                            <label className="onoffswitch6-label" htmlFor="header6-checkbox">
                                                <span className="onoffswitch6-inner"></span>
                                                <span className="onoffswitch6-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index.index} className='selectors-module'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon one-visits'></div>
                                        <div className='selectors-module__text'>Контроль разовых посещений по 2D штрих-кодам</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>ПОДРОБНЕЕ</div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                            {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                            {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                            {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                            {turnstile.data.page_view.model_module_list[4] !== undefined && turnstile.data.page_view.model_module_list[4].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[4].price}
                                            {turnstile.data.page_view.model_module_list[5] !== undefined && turnstile.data.page_view.model_module_list[5].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[5].price}
                                            {turnstile.data.page_view.model_module_list[6] !== undefined && turnstile.data.page_view.model_module_list[6].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[6].price}
                                        </div>
                                        <div className="onoffswitch6">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch6" 
                                                className="onoffswitch6-checkbox" 
                                                id="header6-checkbox" 
                                                onClick={this.handleClickFiveSelect}
                                                value={turnstile.data.page_view.module_selectors[5].state}     
                                            />
                                            <label className="onoffswitch6-label" htmlFor="header6-checkbox">
                                                <span className="onoffswitch6-inner"></span>
                                                <span className="onoffswitch6-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })  
                }
                

                {turnstile.data.page_view.module_selectors.slice(6, 7).map((index, key) => {
                    if(index.state === -1) {
                            return (
                                <div key={index.index} className='selectors-module none'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon guest-access'></div>
                                        <div className='selectors-module__text'>Гостевой доступ по 2D штрих-кодам</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>ПОДРОБНЕЕ</div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                            {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'qrvisitors' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                            {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'qrvisitors' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                            {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'qrvisitors' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                            {turnstile.data.page_view.model_module_list[4] !== undefined && turnstile.data.page_view.model_module_list[4].name === 'qrvisitors' && '+ ' + turnstile.data.page_view.model_module_list[4].price}
                                            {turnstile.data.page_view.model_module_list[5] !== undefined && turnstile.data.page_view.model_module_list[5].name === 'qrvisitors' && '+ ' + turnstile.data.page_view.model_module_list[5].price}
                                            {turnstile.data.page_view.model_module_list[6] !== undefined && turnstile.data.page_view.model_module_list[6].name === 'qrvisitors' && '+ ' + turnstile.data.page_view.model_module_list[6].price}
                                            {turnstile.data.page_view.model_module_list[7] !== undefined && turnstile.data.page_view.model_module_list[7].name === 'qrvisitors' && '+ ' + turnstile.data.page_view.model_module_list[7].price}
                                        </div>
                                        <div className="onoffswitch7">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch7" 
                                                className="onoffswitch7-checkbox" 
                                                id="header7-checkbox" 
                                                onChange={this.handleClickSixSelect}
                                                checked={false}
                                            />
                                            <label className="onoffswitch7-label" htmlFor="header7-checkbox">
                                                <span className="onoffswitch7-inner"></span>
                                                <span className="onoffswitch7-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index.index} className='selectors-module'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon guest-access'></div>
                                        <div className='selectors-module__text'>Гостевой доступ по 2D штрих-кодам</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>ПОДРОБНЕЕ</div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                            {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'qrvisitors' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                            {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'qrvisitors' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                            {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'qrvisitors' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                            {turnstile.data.page_view.model_module_list[4] !== undefined && turnstile.data.page_view.model_module_list[4].name === 'qrvisitors' && '+ ' + turnstile.data.page_view.model_module_list[4].price}
                                            {turnstile.data.page_view.model_module_list[5] !== undefined && turnstile.data.page_view.model_module_list[5].name === 'qrvisitors' && '+ ' + turnstile.data.page_view.model_module_list[5].price}
                                            {turnstile.data.page_view.model_module_list[6] !== undefined && turnstile.data.page_view.model_module_list[6].name === 'qrvisitors' && '+ ' + turnstile.data.page_view.model_module_list[6].price}
                                            {turnstile.data.page_view.model_module_list[7] !== undefined && turnstile.data.page_view.model_module_list[7].name === 'qrvisitors' && '+ ' + turnstile.data.page_view.model_module_list[7].price}
                                        </div>
                                        <div className="onoffswitch7">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch7" 
                                                className="onoffswitch7-checkbox" 
                                                id="header7-checkbox" 
                                                onClick={this.handleClickSixSelect}
                                                value={turnstile.data.page_view.module_selectors[6].state}
                                            />
                                            <label className="onoffswitch7-label" htmlFor="header7-checkbox">
                                                <span className="onoffswitch7-inner"></span>
                                                <span className="onoffswitch7-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })  
                }

                {turnstile.data.page_view.module_selectors.slice(7, 8).map((index, key) => {
                    if(index.state === -1) {
                            return (
                                <div key={index.index} className='selectors-module none'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon steel'></div>
                                        <div className='selectors-module__text'>Корпус кожуха из нержавеющей стали</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>ПОДРОБНЕЕ</div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                            {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                            {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                            {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                            {turnstile.data.page_view.model_module_list[4] !== undefined && turnstile.data.page_view.model_module_list[4].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[4].price}
                                            {turnstile.data.page_view.model_module_list[5] !== undefined && turnstile.data.page_view.model_module_list[5].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[5].price}
                                            {turnstile.data.page_view.model_module_list[6] !== undefined && turnstile.data.page_view.model_module_list[6].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[6].price}
                                            {turnstile.data.page_view.model_module_list[7] !== undefined && turnstile.data.page_view.model_module_list[7].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[7].price}
                                            {turnstile.data.page_view.model_module_list[8] !== undefined && turnstile.data.page_view.model_module_list[8].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[8].price}
                                        </div>
                                        <div className="onoffswitch8">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch8" 
                                                className="onoffswitch8-checkbox" 
                                                id="header8-checkbox" 
                                                onClick={this.handleClickSevenSelect}
                                                checked={false}   
                                            />
                                            <label className="onoffswitch8-label" htmlFor="header8-checkbox">
                                                <span className="onoffswitch8-inner"></span>
                                                <span className="onoffswitch8-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index.index} className='selectors-module'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon steel'></div>
                                        <div className='selectors-module__text'>Корпус кожуха из нержавеющей стали</div>
                                        <div className='selectors-module__info'>
                                            <div className='selectors-module__info-text'>ПОДРОБНЕЕ</div>
                                            <div className='selectors-module__info-arrow'></div>
                                        </div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className='selectors-module__price'>
                                            {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                            {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                            {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                            {turnstile.data.page_view.model_module_list[4] !== undefined && turnstile.data.page_view.model_module_list[4].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[4].price}
                                            {turnstile.data.page_view.model_module_list[5] !== undefined && turnstile.data.page_view.model_module_list[5].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[5].price}
                                            {turnstile.data.page_view.model_module_list[6] !== undefined && turnstile.data.page_view.model_module_list[6].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[6].price}
                                            {turnstile.data.page_view.model_module_list[7] !== undefined && turnstile.data.page_view.model_module_list[7].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[7].price}
                                            {turnstile.data.page_view.model_module_list[8] !== undefined && turnstile.data.page_view.model_module_list[8].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[8].price}
                                        </div>
                                        <div className="onoffswitch8">
                                            <input 
                                                type="checkbox" 
                                                name="onoffswitch8" 
                                                className="onoffswitch8-checkbox" 
                                                id="header8-checkbox" 
                                                onClick={this.handleClickSevenSelect}
                                                value={turnstile.data.page_view.module_selectors[7].state}    
                                            />
                                            <label className="onoffswitch8-label" htmlFor="header8-checkbox">
                                                <span className="onoffswitch8-inner"></span>
                                                <span className="onoffswitch8-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })  
                }
            </div>
        )
    }
}
ModuleSelectors.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    data: state
})
export default connect(
    mapStateToProps, 
    { 
        fetchDataTurnstile, 
        togglePopupWindowTurnstile 
    }
)(ModuleSelectors)