/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE BASKET IN TURNSTILE COMPONENT ************* */
import './moduleBasket.scss';

/** ************* IMPORT __UTILS__ FOR BASKET IN TURNSTILE COMPONENT ************* */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

class ModuleBasket extends React.Component {
    render() {
        
        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        //console.log(this.props.data)
        //console.log(turnstile)
        if(turnstile.data.length === 0 && !isFetching) {
            return (
                <Suspense fallback={<div><Loader /></div>}></Suspense>
            )
        }
        return (

            /** ************* MODULE BASKET ************* */
            <section className='basket'>
                <p className='basket-description'>Конфигуратор</p>
                <div className='basket-data'>
                    <Link to='/turnstile/offer' className='basket-data__wrapper'>
                        <div className='basket-data__wrapper-info'>
                            <div className='text'>Товаров:</div>
                            <div className='count'>{turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                        <div className='basket-data__wrapper-info'>
                            <div className='text'>На сумму:</div>
                            <div className='count'>{turnstile.data.page_view.model_price}</div>
                        </div>
                    </Link>
                    <div className='basket-more'></div>
                </div>
            </section>
        )
    }
}
ModuleBasket.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleBasket);