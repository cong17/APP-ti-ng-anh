import React from 'react';
import PropTypes from 'prop-types';
import styles from './SessionComplete.module.css';

const SessionComplete = props => (
	<React.Fragment>
		{props.courseFinished ? (
			<div className={styles.Content}>Chủ đề đã hoàn thành</div>
		) : (
			<div className={styles.Content}>Buổi học hoàn thành!</div>
		)}
		<div onClick={props.home} className={styles.NextButton}>
			<div className={styles.BtnText}>Chủ đề</div>
			<div className={styles.RightArrow} />
		</div>
	</React.Fragment>
);

export default React.memo(SessionComplete);

SessionComplete.propTypes = {
	home: PropTypes.func.isRequired,
	courseFinished: PropTypes.bool,
};
