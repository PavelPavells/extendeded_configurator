/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE MODAL IN EQUIPMENT COMPONENT ************* */
import './equipmentModal.scss';

/** ************* IMPORT __UTILS__ FOR MODAL IN EQUIPMENT COMPONENT ************* */
const Loader = lazy(() => import('../../../../__utils__/Loader/Loader'));

class EquipmentModal extends React.Component {

    /** ************* FETCHING DATA ************* */
    componentDidMount() {
       this.props.fetchDataTurnstile();
    }
    render() {

        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        //console.log(turnstile);
        if (turnstile.data.length === 0 && !isFetching) {
           return <Suspense fallback={<div><Loader /></div>}></Suspense>
        }
        return (

            /** ************* EQUIPMENT MODAL ************* */
            <div className='modal'>

                {/** ************* EQUIPMENT MODAL BLOCKS ************* */}
                <div className='modal-wrapper'>
                    <div className='block'>
                        <div className='block-image'>
                            <img src={turnstile.data.page_view.model_main_photo} alt='' />
                        </div>
                        <div className='block-description'>
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className='block-amount'>
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className='block-add'>
                            <div className='block-add__value'>
                                <div className='quantity'>Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className='more'>
                                    <div className='more-minus'></div>
                                    <div className='more-plus'></div>
                                </div>
                            </div>
                            <div className='block-add__button'>ДОБАВИТЬ</div>
                            <div className='block-add__amount'>РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/** ************* EQUIPMENT MODAL BLOCKS ************* */}
                <div className='modal-wrapper'>
                    <div className='block'>
                        <div className='block-image'>
                            <img src={turnstile.data.page_view.model_main_photo} alt='' />
                        </div>
                        <div className='block-description'>
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className='block-amount'>
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className='block-add'>
                            <div className='block-add__value'>
                                <div className='quantity'>Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className='more'>
                                    <div className='more-minus'></div>
                                    <div className='more-plus'></div>
                                </div>
                            </div>
                            <div className='block-add__button'>ДОБАВИТЬ</div>
                            <div className='block-add__amount'>РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/** ************* EQUIPMENT MODAL BLOCKS ************* */}
                <div className='modal-wrapper'>
                    <div className='block'>
                        <div className='block-image'>
                            <img src={turnstile.data.page_view.model_main_photo} alt='' />
                        </div>
                        <div className='block-description'>
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className='block-amount'>
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className='block-add'>
                            <div className='block-add__value'>
                                <div className='quantity'>Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className='more'>
                                    <div className='more-minus'></div>
                                    <div className='more-plus'></div>
                                </div>
                            </div>
                            <div className='block-add__button'>ДОБАВИТЬ</div>
                            <div className='block-add__amount'>РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/** ************* EQUIPMENT MODAL BLOCKS ************* */}
                <div className='modal-wrapper'>
                    <div className='block'>
                        <div className='block-image'>
                            <img src={turnstile.data.page_view.model_main_photo} alt='' />
                        </div>
                        <div className='block-description'>
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className='block-amount'>
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className='block-add'>
                            <div className='block-add__value'>
                                <div className='quantity'>Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className='more'>
                                    <div className='more-minus'></div>
                                    <div className='more-plus'></div>
                                </div>
                            </div>
                            <div className='block-add__button'>ДОБАВИТЬ</div>
                            <div className='block-add__amount'>РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/** ************* EQUIPMENT MODAL BLOCKS ************* */}
                <div className='modal-wrapper'>
                    <div className='block'>
                        <div className='block-image'>
                            <img src={turnstile.data.page_view.model_main_photo} alt='' />
                        </div>
                        <div className='block-description'>
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className='block-amount'>
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className='block-add'>
                            <div className='block-add__value'>
                                <div className='quantity'>Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className='more'>
                                    <div className='more-minus'></div>
                                    <div className='more-plus'></div>
                                </div>
                            </div>
                            <div className='block-add__button'>ДОБАВИТЬ</div>
                            <div className='block-add__amount'>РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/** ************* EQUIPMENT MODAL BLOCKS ************* */}
                <div className='modal-wrapper'>
                    <div className='block'>
                        <div className='block-image'>
                            <img src={turnstile.data.page_view.model_main_photo} alt='' />
                        </div>
                        <div className='block-description'>
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className='block-amount'>
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className='block-add'>
                            <div className='block-add__value'>
                                <div className='quantity'>Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className='more'>
                                    <div className='more-minus'></div>
                                    <div className='more-plus'></div>
                                </div>
                            </div>
                            <div className='block-add__button'>ДОБАВИТЬ</div>
                            <div className='block-add__amount'>РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
EquipmentModal.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(EquipmentModal);