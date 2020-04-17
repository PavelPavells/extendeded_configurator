/** ************* IMPORT DEPENDENCIES ************* */
import React, { Fragment, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR STEEL CASE SELECTOR IN TURNSTILE COMPONENT ************* */
import './selectorSteelCase.scss';

/** ************* IMPORT __UTILS__ FOR STEEL CASE SELECTOR IN TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../../../../__utils__/Loader/Loader'));

/** ************* IMPORT POPUP COMPONENT ************* */
//const PopUp = lazy(() => import('../../../../popup/popup'));

class SelectorSteelCase extends React.PureComponent {

    state = {
        modal: false,
        //selectOne: 0,
        //selectTwo: 0,
        //selectThree: 0,
        //selectFour: 0,
        //selectFive: 0,
        //selectSix: 0,
        //selectSeven: 0,
        selectEight: 0,
    }

    /** ************* CHOICE STEEL CASE SELECTOR ************* */
    handleClickSteelCaseSelector = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({ 
            selectEight: +!this.state.selectEight 
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 12,
                trigger_state: this.state.selectEight,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                //selectOne: this.state.selectOne,
                //selectTwo: this.state.selectTwo,
                //selectThree: this.state.selectThree,
                //selectFour: this.state.selectFour,
                //selectFive: this.state.selectFive,
                //selectSix: this.state.selectSix,
                //selectSeven: this.state.selectSeven,
                selectEight: this.state.selectEight
            }
            this.props.fetchDataTurnstile(data);
        })
    }

    render() {
        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        console.log(turnstile);
        if (turnstile.data.length === 0 && !isFetching) {
            return <Suspense fallback={<div><Loader /></div>}></Suspense>
        }
        return(
            /** ************* MODULE STEEL CASE SELECTOR ************* */
            <Fragment>
                {turnstile.data.page_view.module_selectors.slice(7, 8).map((index, key) => {
                    if(index.state === -1) {
                            return (
                                <div key={index.index} className='selectors-module none'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon steel'></div>
                                        <div className='selectors-module__text'>Корпус кожуха из нержавеющей стали</div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className="onoffswitch8">
                                            <input 
                                                type="checkbox"
                                                className="onoffswitch8-checkbox"  
                                                defaultChecked={false}   
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
                                                onChange={this.handleClickSteelCaseSelector}
                                                checked={turnstile.data.page_view.module_selectors[7].state}    
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
            </Fragment>
        )
    }
}
SelectorSteelCase.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(SelectorSteelCase)