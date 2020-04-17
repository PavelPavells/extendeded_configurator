/** ************* IMPORT DEPENDENCIES ************* */
import React, { Fragment, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR INFO TIME MODULE SELECTOR TWO IN TURNSTILE COMPONENT ************* */
import './selectorInfoTime.scss';

/** ************* IMPORT __UTILS__ FOR INFO TIME SELECTOR TWO COMPONENT ************* */
const Loader = lazy(() => import('../../../../../__utils__/Loader/Loader'));

/** ************* IMPORT POPUP COMPONENT ************* */
//const PopUp = lazy(() => import('../../../../popup/popup'));

class SelectorInfoTime extends React.PureComponent {

    state = {
        modal: false,
        //selectOne: 0,
        //selectTwo: 0,
        //selectThree: 0,
        //selectFour: 0,
        selectFive: 0,
        //selectSix: 0,
        //selectSeven: 0,
        //selectEight: 0,
    }

    /** ************* CHOICE INFO TIME SELECTOR ************* */
    handleClickInfoTimeSelector = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({ 
            selectFive: +!this.state.selectFive 
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 9,
                trigger_state: this.state.selectFive,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                //selectOne: this.state.selectOne,
                //selectTwo: this.state.selectTwo,
                //selectThree: this.state.selectThree,
                //selectFour: this.state.selectFour,
                selectFive: this.state.selectFive,
                //selectSix: this.state.selectSix,
                //selectSeven: this.state.selectSeven,
                //selectEight: this.state.selectEight
            }
            this.props.fetchDataTurnstile(data);
        })
    }

    render() {
        const { turnstile, isFetching } = this.props.data;
        console.log(turnstile);
        if (turnstile.data.length === 0 && !isFetching) {
            return <Suspense fallback={<div><Loader /></div>}></Suspense>
        }
        return(
            /** ************* INFO TIME SELECTOR ************* */
            <Fragment>
                {turnstile.data.page_view.module_selectors.slice(4, 5).map((index, key) => {
                    if(index.state === -1) {
                            return (
                                <div key={index.index} className='selectors-module none'>
                                    <div className='selectors-module__left'>
                                        <div className='selectors-module__icon time'></div>
                                        <div className='selectors-module__text'>Информационный дисплей учета рабочего времени</div>
                                    </div>
                                    <div className='selectors-module__right'>
                                        <div className="onoffswitch5">
                                            <input 
                                                type="checkbox"
                                                className="onoffswitch5-checkbox"
                                                defaultChecked={false}    
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
                                                onChange={this.handleClickInfoTimeSelector}
                                                checked={turnstile.data.page_view.module_selectors[4].state}     
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
            </Fragment>
        )
    }
}
SelectorInfoTime.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(SelectorInfoTime)