import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './Courses.module.css';
import Header from '../../components/Header/Header';

class Courses extends Component {
	state = {
		coursesHTML: null,
	};

	componentDidMount() {
		this.loadCourses();
	}

	loadCourses = () => {
		const coursesHTML = [];

		const url =
			window.location.href.indexOf('heroku') !== -1
				? 'https://memclone-react-django.herokuapp.com/'
				: 'http://localhost:8000/';

		axios.get(url + 'courses-api/').then(res => {
			for (let course of res.data) {
				coursesHTML.push(
					<Link key={course.id} to={'/course/' + course.id} className={styles.CourseCard}>
						{course.name}
					</Link>,
				);
			}

			this.setState({
				coursesHTML: coursesHTML,
			});
		});
	};

	render() {
		let coursesHTML = this.state.coursesHTML;
		if (!coursesHTML) {
			coursesHTML = [];
			for (let i = 0; i < 8; i++) {
				coursesHTML.push(<div key={i} className={styles.CourseCardPlaceHolder} />);
			}
		}
		return (
			<React.Fragment>
				<Header url={this.props.match.url} />
				<div className={styles.PageHead}>
					<div className={styles.PageHeadRow}>
						<div className={styles.Title}>Chủ đề</div>
						<Link className={styles.CreateButton} to="/course/create">
							Tạo mới/đóng góp  chủ đề
						</Link>
					</div>
				</div>
				<div className={styles.Content}>
					<div className={styles.ContainerMain}>
						<div className={styles.RightColumn}>{coursesHTML}</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Courses;
