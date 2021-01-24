import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';

const Welcome = () => (
	<div className={styles.WelcomeCard}>
		<div className={styles.TextWrapper}>
			<div className={styles.Title}> Chào mừng bạn đến với PM hỗ trợ học tiếng Anh  ! </div>
			Chọn một chủ đề và bắt đầu học.
		</div>
		<div className={styles.BtnWrapper}>
			<Link to="/courses" className={styles.CoursesBtn}>
				Chọn một chủ đề
			</Link>
		</div>
	</div>
);

export default React.memo(Welcome);
