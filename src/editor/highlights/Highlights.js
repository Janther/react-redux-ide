import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Highlights = ({}) => {
  return (
    <div className={classNames('highlights')}>
      <div className={classNames('highlight', 'selection')}>
        <div className={classNames('region')} style={{boxSizing: 'border-box', top: '0px',  left: '0px', right: '0px',  height: '21px'}}></div>
        <div className={classNames('region')} style={{boxSizing: 'border-box', top: '21px', left: '0px', width: '25px', height: '21px'}}></div>
      </div>
    </div>
  )
}

Highlights.propTypes = {
}

const mapStateToProps = ({ janther: editor }) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Highlights)
