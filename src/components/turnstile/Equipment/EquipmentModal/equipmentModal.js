/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
//import React from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE BUTTONS IN TURNSTILE COMPONENT ************* */
import './equipmentModal.scss';

/** ************* IMPORT __UTILS__ FOR TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../../../__utils__/Loader/Loader'));

class EquipmentModal extends React.Component {

    /** ************* FETCHING DATA ************* */
    componentDidMount() {
       this.props.fetchDataTurnstile()
    }
    render() {

        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        console.log(turnstile.data.page_view.model_price)
        if(turnstile.data.length === 0 && !isFetching) {
           return <Suspense fallback={<div><Loader /></div>}></Suspense>
        }
        return(
            <div className='modal'>

                {/** ************* BLOCK 1 ************* */}
                <div className='modal-block'>
                    <div className='modal-block__image'>
                        <img src={turnstile.data.page_view.model_main_photo} alt='' />
                    </div>
                    <div className='modal-block__description'>
                        {turnstile.data.page_view.caption}
                    </div>
                    <div className='modal-block__amount'>
                        {turnstile.data.page_view.model_price} / <span>3 шт.</span>
                    </div>
                    <div className='modal-block__add'>
                        <div className='modal-block__add-value'>
                            <div className='modal-block'>Количество: 1</div>
                            <div>+ -</div>
                        </div>
                        <div className='modal-block__add-button'>ДОБАВИТЬ</div>
                        <div className='modal-block__add-amount'>РЕКОМЕНДУЕМОЕ КОЛ-ВО: 20</div>
                    </div>
                </div>

                {/** ************* BLOCK 2 ************* */}
                <div className='modal-block'>
                    <div className='modal-block__image'>
                        <img src={turnstile.data.page_view.model_main_photo} alt='' />
                    </div>
                    <div className='modal-block__description'>
                        {turnstile.data.page_view.caption}
                    </div>
                    <div className='modal-block__amount'>
                        {turnstile.data.page_view.model_price} / <span>3 шт.</span>
                    </div>
                    <div className='modal-block__add'>ДОБАВИТЬ</div>
                </div>

                {/** ************* BLOCK 3 ************* */}
                <div className='modal-block'>
                    <div className='modal-block__image'>
                        <img src={turnstile.data.page_view.model_main_photo} alt='' />
                    </div>
                    <div className='modal-block__description'>
                        {turnstile.data.page_view.caption}
                    </div>
                    <div className='modal-block__amount'>
                        {turnstile.data.page_view.model_price} / <span>3 шт.</span>
                    </div>
                    <div className='modal-block__add'>ДОБАВИТЬ</div>
                </div>

                {/** ************* BLOCK 4 ************* */}
                <div className='modal-block'>
                    <div className='modal-block__image'>
                        <img src={turnstile.data.page_view.model_main_photo} alt='' />
                    </div>
                    <div className='modal-block__description'>
                        {turnstile.data.page_view.caption}
                    </div>
                    <div className='modal-block__amount'>
                        {turnstile.data.page_view.model_price} / <span>3 шт.</span>
                    </div>
                    <div className='modal-block__add'>ДОБАВИТЬ</div>
                </div>

                {/** ************* BLOCK 5 ************* */}
                <div className='modal-block'>
                    <div className='modal-block__image'>
                        <img src={turnstile.data.page_view.model_main_photo} alt='' />
                    </div>
                    <div className='modal-block__description'>
                        {turnstile.data.page_view.caption}
                    </div>
                    <div className='modal-block__amount'>
                        {turnstile.data.page_view.model_price} / <span>3 шт.</span>
                    </div>
                    <div className='modal-block__add'>ДОБАВИТЬ</div>
                </div>

                {/** ************* BLOCK 6 ************* */}
                <div className='modal-block'>
                    <div className='modal-block__image'>
                        <img src={turnstile.data.page_view.model_main_photo} alt='' />
                    </div>
                    <div className='modal-block__description'>
                        {turnstile.data.page_view.caption}
                    </div>
                    <div className='modal-block__amount'>
                        {turnstile.data.page_view.model_price} / <span>3 шт.</span>
                    </div>
                    <div className='modal-block__add'>ДОБАВИТЬ</div>
                </div>
            </div>
        )
    }
}
EquipmentModal.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(EquipmentModal)