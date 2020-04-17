/** ************* IMPORT DEPENDENCIES ************* */
import React, { Fragment, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MIFIRE SELECTOR TWO IN TURNSTILE COMPONENT ************* */
import './selectorMifire.scss';

/** ************* IMPORT __UTILS__ FOR MIFIRE SELECTOR TWO COMPONENT ************* */
const Loader = lazy(() => import('../../../../../__utils__/Loader/Loader'));

/** ************* IMPORT POPUP COMPONENT ************* */
const PopUp = lazy(() => import('../../../../popup/popup'));

class SelectorMifire extends React.PureComponent {

    state = {
        modal: false,
        //selectOne: 0,
        //selectTwo: 0,
        selectThree: 0,
        //selectFour: 0,
        //selectFive: 0,
        //selectSix: 0,
        //selectSeven: 0,
        //selectEight: 0,
    }

    /** ************* CHOICE MIFIRE SELECTOR ************* */
    handleClickMifireSelector = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({ 
            selectThree: +!this.state.selectThree 
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 7,
                trigger_state: this.state.selectThree,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                //selectOne: this.state.selectOne,
                //selectTwo: this.state.selectTwo,
                selectThree: this.state.selectThree,
                //selectFour: this.state.selectFour,
                //selectFive: this.state.selectFive,
                //selectSix: this.state.selectSix,
                //selectSeven: this.state.selectSeven,
                //selectEight: this.state.selectEight
            }
            this.props.fetchDataTurnstile(data);
        })
    }

    render() {
        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        //console.log(turnstile);
        if (turnstile.data.length === 0 && !isFetching) {
            return <Suspense fallback={<div><Loader /></div>}></Suspense>
        }
        return (
            /** ************* MIFIRE SELECTOR ************* */
            <Fragment>
                {turnstile.data.page_view.module_selectors.slice(2, 3).map((index, key) => (
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
                                    onChange={this.handleClickMifireSelector}
                                    checked={turnstile.data.page_view.module_selectors[2].state} 
                                />
                                <label className="onoffswitch3-label" htmlFor="header3-checkbox">
                                    <span className="onoffswitch3-inner"></span>
                                    <span className="onoffswitch3-switch"></span>
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
SelectorMifire.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(SelectorMifire)