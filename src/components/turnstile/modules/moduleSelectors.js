/** ************* IMPORT DEPENDENCIES ************* */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE SELECTORS IN TURNSTILE COMPONENT ************* */
import './styles/moduleSelectors.scss';

class ModuleSelectors extends React.Component {

    /** ************* FETCHING DATA ************* */
    componentDidMount() {
        this.props.fetchDataTurnstile()
    }
    render() {
        return (
            <div>BUTTONS</div>
        )
    }
}
ModuleSelectors.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    mainTurnstile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    mainTurnstile: state
})
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleSelectors)