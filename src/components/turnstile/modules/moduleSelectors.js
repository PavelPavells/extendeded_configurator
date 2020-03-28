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
import './styles/moduleSelectors.scss';

/** ************* IMPORT __UTILS__ FOR TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

/** ************* IMPORT POPUP COMPONENT ************* */
const PopUp = lazy(() => import('../../popup/popup'));


class ModuleSelectors extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: false
        }
    }

    /** ************* FETCHING DATA ************* */
    componentDidMount() {
        this.props.fetchDataTurnstile()
    }

    /** ************* TOGGLE MODAL ************* */
    handleModal = event => {
        this.props.togglePopupWindowTurnstile()
    }
    render() {
        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        console.log(turnstile)
        if(turnstile.data.length === 0 && !isFetching) {
            return (
                <Suspense fallback={<div><Loader /></div>}></Suspense>
            )
        }
        return (
            <div className='selectors'>
                <div className='selectors-text'>Дополнительные модули</div>
                <div className='selectors-module'>
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
                            <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="header-checkbox" />
                            <label className="onoffswitch-label" htmlFor="header-checkbox">
                                <span className="onoffswitch-inner"></span>
                                <span className="onoffswitch-switch"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='selectors-module'>
                    <div className='selectors-module__left'>
                        <div className='selectors-module__icon emmarine'></div>
                        <div className='selectors-module__text'>RFID идентификаторы EMMarine 125kHZ</div>
                        <div className='selectors-module__info'>
                            <div className='selectors-module__info-text'>ПОДРОБНЕЕ</div>
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
                            <input type="checkbox" name="onoffswitch2" className="onoffswitch2-checkbox" id="header2-checkbox" />
                            <label className="onoffswitch2-label" htmlFor="header2-checkbox">
                                <span className="onoffswitch2-inner"></span>
                                <span className="onoffswitch2-switch"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='selectors-module'>
                    <div className='selectors-module__left'>
                        <div className='selectors-module__icon mifire'></div>
                        <div className='selectors-module__text'>RFID идентификаторы Mifire 13.56MHz</div>
                        <div className='selectors-module__info'>
                            <div className='selectors-module__info-text'>ПОДРОБНЕЕ</div>
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
                            <input type="checkbox" name="onoffswitch3" className="onoffswitch3-checkbox" id="header3-checkbox" />
                            <label className="onoffswitch3-label" htmlFor="header3-checkbox">
                                <span className="onoffswitch3-inner"></span>
                                <span className="onoffswitch3-switch"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='selectors-module'>
                    <div className='selectors-module__left'>
                        <div className='selectors-module__icon bio'></div>
                        <div className='selectors-module__text'>Биометрическая идентификация по отпечаткам пальцев</div>
                        <div className='selectors-module__info'>
                            <div className='selectors-module__info-text'>ПОДРОБНЕЕ</div>
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
                            <input type="checkbox" name="onoffswitch4" className="onoffswitch4-checkbox" id="header4-checkbox" />
                            <label className="onoffswitch4-label" htmlFor="header4-checkbox">
                                <span className="onoffswitch4-inner"></span>
                                <span className="onoffswitch4-switch"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='selectors-module'>
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
                            <input type="checkbox" name="onoffswitch5" className="onoffswitch5-checkbox" id="header5-checkbox" />
                            <label className="onoffswitch5-label" htmlFor="header5-checkbox">
                                <span className="onoffswitch5-inner"></span>
                                <span className="onoffswitch5-switch"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='selectors-module'>
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
                            <input type="checkbox" name="onoffswitch6" className="onoffswitch6-checkbox" id="header6-checkbox" />
                            <label className="onoffswitch6-label" htmlFor="header6-checkbox">
                                <span className="onoffswitch6-inner"></span>
                                <span className="onoffswitch6-switch"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='selectors-module'>
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
                            <input type="checkbox" name="onoffswitch7" className="onoffswitch7-checkbox" id="header7-checkbox" />
                            <label className="onoffswitch7-label" htmlFor="header7-checkbox">
                                <span className="onoffswitch7-inner"></span>
                                <span className="onoffswitch7-switch"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='selectors-module'>
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
                            <input type="checkbox" name="onoffswitch8" className="onoffswitch8-checkbox" id="header8-checkbox" />
                            <label className="onoffswitch8-label" htmlFor="header8-checkbox">
                                <span className="onoffswitch8-inner"></span>
                                <span className="onoffswitch8-switch"></span>
                            </label>
                        </div>
                    </div>
                </div>
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
export default connect(mapStateToProps, { fetchDataTurnstile, togglePopupWindowTurnstile })(ModuleSelectors)