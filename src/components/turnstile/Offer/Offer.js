/** ************* IMPORT DEPENDENCIES ************* */
import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR OFFER IN TURNSTILE COMPONENT ************* */
import './Offer.scss';

/** ************* IMPORT __UTILS__ FOR OFFER COMPONENT ************* */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

class Offer extends React.Component {

    /** ************* FETCHING DATA ************* */
    componentDidMount() {
        this.props.fetchDataTurnstile()
    }

    render() {
        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;
        //console.log(this.props)
        //console.log(turnstile.data.page_view.model_module_list)
        if(turnstile.data.length === 0 && !isFetching) {
            return (
                <Suspense fallback={<div><Loader /></div>}></Suspense>
            )
        }
        return (

            /** ************* MODULE OFFER ************* */
            <section className='offer'>
                <div className="offer-description">
                    <div className="left">
                        <Link to='/turnstile' className="left-arrow"></Link>
                        <div className="left-text">КП для клиента</div>
                        <div className="left-agreement">№123456-ABC от 01.04.2020</div>
                    </div>
                    <div className="right">
                        <div className='right-wrapper'>
                            <div className='right-wrapper__info'>
                                <div className='text'>Товаров:</div>
                                <div className='count'>{turnstile.data.page_view.model_module_list.length}</div>
                            </div>
                            <div className='right-wrapper__info'>
                                <div className='text'>На сумму:</div>
                                <div className='count'>{turnstile.data.page_view.model_price}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offer-goods">
                    {turnstile.data.page_view.model_module_list.map((index, key) => (
                        <div key={index.index} index={index.index} className='blocks'>
                            <div className='block-left'>
                                <div className="block-left__image">
                                    <img src={turnstile.data.page_view.model_main_photo} alt='' />
                                </div>
                                <div className="block-left__text">
                                    <div className="block-left__text-partition">{index.caption}</div>
                                    <div className="block-left__text-name">{index.caption}</div>
                                </div>
                            </div>
                            <div className="blocks-info">
                                <div className="blocks-info__value">{turnstile.data.page_view.model_module_list.length}</div>
                                <div className="blocks-info__add">+</div>
                                <div className='blocks-info__price'>
                                    <div className="nondiscount">{index.price}</div>
                                    <div className="discount">{index.price}</div>
                                </div>
                                <div className='blocks-info__offer'>{index.price}</div>
                                <div className="blocks-info__delete"></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="offer-price">
                    <div className='offer-price__image'></div>
                    <div className="offer-price__full">
                        <div className='offer-price__text'>Стоимость без скидки</div>
                        <div className='offer-price__price'>{turnstile.data.page_view.model_price}</div>
                    </div>
                    <div className="offer-price__sale">
                        <div className='offer-price__text'>Скидка<span className='offer-price__text-sale'>25%</span></div>
                        <div className='offer-price__price'>{turnstile.data.page_view.model_price}</div>
                    </div>
                    <div className="offer-price__total">
                        <div className='offer-price__text'>Итого со скидкой</div>
                        <div className='offer-price__price'>{turnstile.data.page_view.model_price}</div>
                    </div>
                </div>
                <div className="offer-btn">
                    <div className="offer-btn__icon"></div>
                    <div className="offer-btn__text">СКАЧАТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</div>
                    <div className="offer-btn__line"></div>
                    <div className="offer-btn__format">XLS, 800 KB</div>
                </div>
                <div className="offer-confidence">
                    Данное коммерческое предложение будет анонимным. 
                    В нем будут присутствовать реквизиты партнера и выбранные<br/>
                    товары, но не будет информации о клиенте.
                </div>
            </section>
        )
    }
}
Offer.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    data: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(Offer)