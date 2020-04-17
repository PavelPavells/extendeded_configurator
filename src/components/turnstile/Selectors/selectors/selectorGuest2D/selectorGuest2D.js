/** ************* IMPORT DEPENDENCIES ************* */
import React, { Fragment, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR GUEST2D SELECTOR IN TURNSTILE COMPONENT ************* */
import './selectorGuest2D.scss';

/** ************* IMPORT __UTILS__ FOR GUEST2D SELECTOR COMPONENT ************* */
const Loader = lazy(() => import('../../../../../__utils__/Loader/Loader'));

/** ************* IMPORT POPUP COMPONENT ************* */
//const PopUp = lazy(() => import('../../../../popup/popup'));

class SelectorGuest2D extends React.PureComponent {

    state = {
        modal: false,
        //selectOne: 0,
        //selectTwo: 0,
        //selectThree: 0,
        //selectFour: 0,
        //selectFive: 0,
        //selectSix: 0,
        selectSeven: 0,
        //selectEight: 0,
    }

    /** ************* CHOICE GUEST 2D SELECTOR ************* */
    handleClickGuest2DSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({ 
            selectSeven: +!this.state.selectSeven
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 11,
                trigger_state: this.state.selectSeven,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                //selectOne: this.state.selectOne,
                //selectTwo: this.state.selectTwo,
                //selectThree: this.state.selectThree,
                //selectFour: this.state.selectFour,
                //selectFive: this.state.selectFive,
                //selectSix: this.state.selectSix,
                selectSeven: this.state.selectSeven,
                //selectEight: this.state.selectEight
            }
            this.props.fetchDataTurnstile(data);
        })
    }

    render() {
        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        console.log(turnstile);
        if(turnstile.data.length === 0 && !isFetching) {
            return <Suspense fallback={<div><Loader /></div>}></Suspense>
        }
        return (
            /** ************* GUEST 2D SELECTOR ************* */
            <Fragment>
                {turnstile.data.page_view.module_selectors.slice(6, 7).map((index, key) => {
                    if(index.state === -1) {
                            return (
                                <div key={index.index} className='selectors-module none'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon guest-access'></div>
                                        <div className='selectors-module__text'>Гостевой доступ по 2D штрих-кодам</div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className="onoffswitch7">
                                            <input 
                                                type="checkbox" 
                                                className="onoffswitch7-checkbox"
                                                defaultChecked={false}
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
                                                onChange={this.handleClickGuest2DSelect}
                                                checked={turnstile.data.page_view.module_selectors[6].state}
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
            </Fragment>
        )
    }
}
SelectorGuest2D.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(SelectorGuest2D)