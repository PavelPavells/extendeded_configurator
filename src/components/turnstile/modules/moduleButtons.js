/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE BUTTONS IN TURNSTILE COMPONENT ************* */
import './styles/moduleButtons.scss';

/** ************* IMPORT __UTILS__ FOR TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

class ModuleButtons extends React.Component {

    /** ************* FETCHING DATA ************* */
    componentDidMount() {
        this.props.fetchDataTurnstile()
    }

    /** ************* HANDLE CLICK SERIA STR ************* */
    handleClickSeriaSTR = event => {
        event.preventDefault()
    }

    /** ************* HANDLE CLICK SERIA STX ************* */
    handleClickSeriaSTX = event => {
        event.preventDefault();
    }

    /** ************* HANDLE CLICK SERIA STR ************* */
    handleClickExecutionCompact = event => {
        event.preventDefault();
    }

    /** ************* HANDLE CLICK SERIA STR ************* */
    handleClickExecutionThumb = event => {
        event.preventDefault();
    }
    render() {
        const { data } = this.props.mainTurnstile.dataTurnstile;
        //console.log(data)
        if(data.length === 0) {
            return (
                <Suspense fallback={<div><Loader /></div>}></Suspense>
            )
        }
        return (

            /** ************* MODULE BUTTONS ************* */
            <div className='module-buttons'>
                <div className='top'>
                    <div className='top-captions'>
                        <div className='top-captions__description'>Модель</div>
                        <div className='top-captions__description'>Серия</div>
                        <div className='top-captions__description'>Итоговая стоимость</div>
                    </div>
                    <div className='top-select'>
                    <div className='top-select__model'>{data.page_view.model_name}</div>
                        <div className='top-select__seria'>

                            {/** ====================== STR BLOCK ====================== */}
                            {data.page_view.btn_seria === 0
                                ?
                                <>
                                    <div onClick={this.handleClickSeriaSTR} className='top-select__seria-str open'>STR</div>
                                </>
                                :
                                <>
                                    <div onClick={this.handleClickSeriaSTR} className='top-select__seria-str'>STR</div>
                                </>
                            }

                            {/** ====================== STX BLOCK ====================== */}
                            {data.page_view.btn_seria === 1
                                ?
                                <>
                                    <div onClick={this.handleClickSeriaSTX} className='top-select__seria-stx open'>STX</div>
                                </>
                                :
                                <>
                                    <div onClick={this.handleClickSeriaSTX} className='top-select__seria-stx'>STX</div>
                                </>
                            }
                        </div>
                        <div className='top-select__price'>{data.page_view.model_price}</div>
                    </div>
                    <div className='top-info'>
                        <a
                            href={data.page_view.download_broshure_button_link} 
                            className='top-info__docs' 
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            ПОДРОБНЕЕ О МОДЕЛИ
                        </a>
                        <a 
                            href={data.page_view.model_base_model}
                            className='top-info__base'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            БАЗОВАЯ МОДЕЛЬ {data.page_view.model_module_list.length - 1 >= 1 ? '(' + data.page_view.model_module_list[0].price + ')' : null}
                        </a>
                    </div>
                    <div className='top-options'>
                        <div className='top-options__value'>
                            {data.page_view.model_module_list.length - 1 === 1 ? String('+') + (data.page_view.model_module_list.length - 1) + ' ОПЦИЯ' : null}
                            {data.page_view.model_module_list.length - 1 > 1 ? String('+') + (data.page_view.model_module_list.length - 1) + ' ОПЦИИ' : null}
                            {data.page_view.model_module_list.length - 1 >= 5 ? String('+') + (data.page_view.model_module_list.length - 1) + ' ОПЦИЙ' : null}
                        </div>
                        <div className='top-options__reset'>СБРОСИТЬ</div>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='bottom-execution'>Исполнение</div>
                    <div className='bottom-buttons'>

                        {/** ====================== COMPACT BLOCK ====================== */}
                        {data.page_view.btn_corpse === 0
                            ?
                            <>
                                <div onClick={this.handleClickExecutionCompact} className='bottom-buttons__compact open'>Компактный</div>
                            </>
                            :
                            <>
                                <div onClick={this.handleClickExecutionCompact} className='bottom-buttons__compact'>Компактный</div>
                            </>
                        }

                        {/** ====================== THUMB BLOCK ====================== */}
                        {data.page_view.btn_corpse === 1
                            ?
                            <>
                                <div onClick={this.handleClickExecutionThumb} className='bottom-buttons__thumb open'>Тумбовый</div>
                            </>
                            :
                            <>
                                <div onClick={this.handleClickExecutionThumb} className='bottom-buttons__thumb'>Тумбовый</div>
                            </>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
ModuleButtons.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    mainTurnstile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    mainTurnstile: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleButtons)