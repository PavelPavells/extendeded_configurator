/** ************* IMPORT DEPENDENCIES ************* */
import React, { Fragment, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { 
    fetchDataTurnstile, 
    togglePopupWindowTurnstile 
} from '../../../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE BIOMETRY SELECTOR TWO IN TURNSTILE COMPONENT ************* */
import './selectorBiometry.scss';

/** ************* IMPORT POPUP COMPONENT ************* */
const PopUp = lazy(() => import('../../../../popup/popup'));

class SelectorBiometry extends React.PureComponent {

    state = { selectFour: 0 };

    /** ************* TOGGLE MODAL ************* */
    handleToggleModal = () => {
        this.props.togglePopupWindowTurnstile();
    }
    
    /** ************* CHOICE BIOMETRY SELECTOR ************* */
    handleClickFourSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({ 
            selectFour: +!page_view.module_selectors[3].state  
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 8,
                trigger_state: this.state.selectFour,
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

    render() {
        /** ************* DATA FROM STORE ************* */
        const { turnstile } = this.props.data;
        //console.log(turnstile);
        return(
            /** ************* BIOMETRY SELECTOR ************* */
            <Fragment>
                {turnstile.data.page_view.module_selectors.slice(3, 4).map((index, key) => (
                    <div key={index.index} className='selectors-module'>
                        <div className='selectors-module__left'>
                            <div className='selectors-module__icon bio'></div>
                            <div className='selectors-module__text'>Биометрическая идентификация по отпечаткам пальцев</div>
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
                                    onChange={this.handleClickFourSelect}
                                    checked={turnstile.data.page_view.module_selectors[3].state}     
                                />
                                <label className="onoffswitch4-label" htmlFor="header4-checkbox">
                                    <span className="onoffswitch4-inner"></span>
                                    <span className="onoffswitch4-switch"></span>
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
SelectorBiometry.propTypes = {
    togglePopupWindowTurnstile: PropTypes.func.isRequired,
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile, togglePopupWindowTurnstile })(SelectorBiometry);