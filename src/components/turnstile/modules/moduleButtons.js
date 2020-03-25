/** ************* IMPORT DEPENDENCIES ************* */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/** ************* IMPORT STYLES FOR MODULE BUTTONS IN TURNSTILE COMPONENT ************* */
import './styles/moduleButtons.scss';

class ModuleButtons extends React.Component {
    componentDidMount() {
        this.props.fetchDataTurnstile()
    }
    render() {
        return (
            <div>BUTTONS</div>
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