import React from 'react';
import styles from './QuitCourseModal.module.css';

const QuitCourseModal = props => (
	<div className={styles.Full}>
		<div className={styles.ModalDialog}>
			<div className={styles.Modal}>
				<div className={styles.ModalHeader}>Quit this course</div>
				<div className={styles.ModalBody}>
				Thoát sẽ không xóa lịch sử học tập của bạn, nhưng sẽ xóa hoàn toàn khỏi
bảng điều khiển. Bạn có thể tham gia lại khóa học để khôi phục sự tiến bộ của mình bất kỳ lúc nào, nhưng bạn sẽ
cần tìm lại nó trong "Các khóa học". Bạn có chắc chắn muốn bỏ thuốc lá không?
				</div>
				<div className={styles.ModalFooter}>
					<div onClick={props.closeModal} className={styles.Button}>
						Không
					</div>
					<div onClick={props.quitCourse} className={styles.Button + ' ' + styles.YesButton}>
						Có
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default React.memo(QuitCourseModal);
