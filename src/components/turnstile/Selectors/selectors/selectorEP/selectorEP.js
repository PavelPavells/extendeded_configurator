/**
 * Импорт зависимостей из NPM
 */
import React, { Fragment, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Импорт экшенов
 */
import { 
    fetchDataTurnstile, 
    togglePopupWindowTurnstile 
} from '../../../../../actions/dataTurnstileActions';

/**
 * Импорт стилей
 */
import './selectorEP.scss';

/**
 * Импорт прелоадера 
 */
const PopUp = lazy(() => import('../../../../popup/popup'));

class SelectorEP extends React.PureComponent {

    state = { selectOne: 0 };

    /**
     * Открыть/Закрыть модальное окно
     */
    handleToggleModal = () => {
        this.props.togglePopupWindowTurnstile();
    }

    /**
    * Хэндлер для обработки запроса селектора 'EP-2000'
    */
    handleClickOneSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({ 
            selectOne: +!page_view.module_selectors[0].state,
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 5,
                trigger_state: this.state.selectOne,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                selectOne: page_view.module_selectors[0].state,
                selectTwo: page_view.module_selectors[1].state,
                selectThree: page_view.module_selectors[2].state,
                selectFour: page_view.module_selectors[3].state,
                selectFive: page_view.module_selectors[4].state,
                selectSix: page_view.module_selectors[5].state,
                selectSeven: page_view.module_selectors[6].state,
                selectEight: page_view.module_selectors[7].state
            }
            this.props.fetchDataTurnstile(data, data.trigger);
        })
    }

    render () {
        
        /** 
         * Данные из глобального стора
         */
        const { turnstile } = this.props.data;
        //console.log(turnstile);
        return (
            
            /**
             * Селектор 'EP-2000'
             */
            <Fragment>
                {turnstile.data.page_view.module_selectors.slice(0, 1).map((index, key) => (
                    <div key={index.index} className='selectors-module'>
                        <div className='selectors-module__left'>
                            <div className='selectors-module__icon ep'></div>
                            <div className='selectors-module__text'>Универсальный сетевой контроллер расширения EP-2000</div>
                            <div className='selectors-module__info'>
                                <div className='selectors-module__info-text'>
                                    <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
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
                                    onChange={this.handleClickOneSelect}
                                    checked={turnstile.data.page_view.module_selectors[0].state}
                                />
                                <label className="onoffswitch-label" htmlFor="header-checkbox">
                                    <span className="onoffswitch-inner"></span>
                                    <span className="onoffswitch-switch"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    )
                )}
            </Fragment>
        )
    }
}
SelectorEP.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    togglePopupWindowTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
}
const mapStateToPtops = state => ({
    data: state
})
export default connect(mapStateToPtops, { fetchDataTurnstile, togglePopupWindowTurnstile })(SelectorEP);