/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE SELECTORS IN TURNSTILE COMPONENT ************* */
import './selectorOne.scss';

/** ************* IMPORT __UTILS__ FOR SELECTORS COMPONENT ************* */
const Loader = lazy(() => import('../../../../../__utils__/Loader/Loader'));

/** ************* IMPORT POPUP COMPONENT ************* */
const PopUp = lazy(() => import('../../../../popup/popup'));

class SelectorOne extends React.PureComponent {

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
    }

    /** ************* CHOICE FIRST SELECTOR ************* */
    handleClickOneSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        //console.log(page_view.module_selectors[0].state)
        this.setState({ 
            selectOne: +!this.state.selectOne 
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 5,
                trigger_state: this.state.selectOne,
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

    render () {
        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        //console.log(turnstile.data.page_view)
        if (turnstile.data.length === 0 && !isFetching) {
            return <Suspense fallback={<div><Loader /></div>}></Suspense>
        }
        return (
            /** ************* EP SELECTORS ************* */
            <React.Fragment>
                {turnstile.data.page_view.module_selectors.slice(0, 1).map((index, key) => (
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
            </React.Fragment>
        )
    }
}

SelectorOne.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object
}
const mapStateToPtops = state => ({
    data: state
})
export default connect(mapStateToPtops, { fetchDataTurnstile })(SelectorOne)