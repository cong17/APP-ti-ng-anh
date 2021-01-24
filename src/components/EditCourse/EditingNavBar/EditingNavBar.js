import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditingNavBar.module.css';

const EditingNavBar = props => (
	<div className={styles.EditingNavBar}>
		<div className={styles.Row}>
			<div className={styles.Title}>Chỉnh sửa</div>
			<div onClick={props.goBack} className={styles.BackBtn}>
				<span className={styles.LeftArrow} />
				Trở về chủ đề
			</div>
		</div>
	</div>
);

export default React.memo(EditingNavBar);

EditingNavBar.propTypes = {
	goBack: PropTypes.func.isRequired,
};
