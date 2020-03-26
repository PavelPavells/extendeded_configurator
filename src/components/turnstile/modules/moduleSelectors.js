/** ************* IMPORT DEPENDENCIES ************* */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE SELECTORS IN TURNSTILE COMPONENT ************* */
import './styles/moduleSelectors.scss';

class ModuleSelectors extends React.Component {

    /** ************* FETCHING DATA ************* */
    componentDidMount() {
        this.props.fetchDataTurnstile()
    }
    render() {
        const { data } = this.props.mainTurnstile.dataTurnstile;
        console.log(data)
        return (
            <div className='selectors'>
                <div className='selectors-text'>Дополнительные модули</div>
                <div className='selectors-module'>
                    <div className='selectors-module__icon ep'></div>
                    <div className='selectors-module__text'>Универсальный сетевой контроллер расширения EP-2000</div>
                    <div className='selectors-module__info'>ПОДРОБНЕЕ</div>
                    <div className="onoffswitch">
                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="header-checkbox" />
                        <label className="onoffswitch-label" for="header-checkbox">
                            <span className="onoffswitch-inner"></span>
                            <span className="onoffswitch-switch"></span>
                        </label>
                    </div>
                </div>
                <div className='selectors-module'>
                    <div className='selectors-module__icon emmarine'></div>
                    <div className='selectors-module__text'>RFID идентификаторы EMMarine 125kHZ</div>
                    <div className='selectors-module__info'>ПОДРОБНЕЕ</div>
                    <div className="onoffswitch2">
                        <input type="checkbox" name="onoffswitch2" className="onoffswitch2-checkbox" id="header2-checkbox" />
                        <label className="onoffswitch2-label" for="header2-checkbox">
                            <span className="onoffswitch2-inner"></span>
                            <span className="onoffswitch2-switch"></span>
                        </label>
                    </div>
                </div>
                <div className='selectors-module'>
                    <div className='selectors-module__icon mifire'></div>
                    <div className='selectors-module__text'>RFID идентификаторы Mifire 13.56MHz</div>
                    <div className='selectors-module__info'>ПОДРОБНЕЕ</div>
                    <div className="onoffswitch3">
                        <input type="checkbox" name="onoffswitch3" className="onoffswitch3-checkbox" id="header3-checkbox" />
                        <label className="onoffswitch3-label" for="header3-checkbox">
                            <span className="onoffswitch3-inner"></span>
                            <span className="onoffswitch3-switch"></span>
                        </label>
                    </div>
                </div>
                <div className='selectors-module'>
                    <div className='selectors-module__icon bio'></div>
                    <div className='selectors-module__text'>Биометрическая идентификация по отпечаткам пальцев</div>
                    <div className='selectors-module__info'>ПОДРОБНЕЕ</div>
                    <div className="onoffswitch4">
                        <input type="checkbox" name="onoffswitch4" className="onoffswitch4-checkbox" id="header4-checkbox" />
                        <label className="onoffswitch4-label" for="header4-checkbox">
                            <span className="onoffswitch4-inner"></span>
                            <span className="onoffswitch4-switch"></span>
                        </label>
                    </div>
                </div>
                <div className='selectors-module'>
                    <div className='selectors-module__icon time'></div>
                    <div className='selectors-module__text'>Информационный дисплей учета рабочего времени</div>
                    <div className='selectors-module__info'>ПОДРОБНЕЕ</div>
                    <div className="onoffswitch5">
                        <input type="checkbox" name="onoffswitch5" className="onoffswitch5-checkbox" id="header5-checkbox" />
                        <label className="onoffswitch5-label" for="header5-checkbox">
                            <span className="onoffswitch5-inner"></span>
                            <span className="onoffswitch5-switch"></span>
                        </label>
                    </div>
                </div>
                <div className='selectors-module'>
                    <div className='selectors-module__icon one-visits'></div>
                    <div className='selectors-module__text'>Контроль разовых посещений по 2D штрих-кодам</div>
                    <div className='selectors-module__info'>ПОДРОБНЕЕ</div>
                    <div className="onoffswitch6">
                        <input type="checkbox" name="onoffswitch6" className="onoffswitch6-checkbox" id="header6-checkbox" />
                        <label className="onoffswitch6-label" for="header6-checkbox">
                            <span className="onoffswitch6-inner"></span>
                            <span className="onoffswitch6-switch"></span>
                        </label>
                    </div>
                </div>
                <div className='selectors-module'>
                    <div className='selectors-module__icon guest-access'></div>
                    <div className='selectors-module__text'>Гостевой доступ по 2D штрих-кодам</div>
                    <div className='selectors-module__info'>ПОДРОБНЕЕ</div>
                    <div className="onoffswitch7">
                        <input type="checkbox" name="onoffswitch7" className="onoffswitch7-checkbox" id="header7-checkbox" />
                        <label className="onoffswitch7-label" for="header7-checkbox">
                            <span className="onoffswitch7-inner"></span>
                            <span className="onoffswitch7-switch"></span>
                        </label>
                    </div>
                </div>
                <div className='selectors-module'>
                    <div className='selectors-module__icon steel'></div>
                    <div className='selectors-module__text'>Корпус кожуха из нержавеющей стали</div>
                    <div className='selectors-module__info'>ПОДРОБНЕЕ</div>
                    <div className="onoffswitch8">
                        <input type="checkbox" name="onoffswitch8" className="onoffswitch8-checkbox" id="header8-checkbox" />
                        <label className="onoffswitch8-label" for="header8-checkbox">
                            <span className="onoffswitch8-inner"></span>
                            <span className="onoffswitch8-switch"></span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
ModuleSelectors.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    mainTurnstile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    mainTurnstile: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleSelectors)