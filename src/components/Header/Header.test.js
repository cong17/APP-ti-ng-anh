import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header, { NavButton } from './Header';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Header', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Header url={'/home'} />);
	});

	it('url=home, checking buttons', () => {
		expect(wrapper.contains(<Link to="/" className={styles.LogoWrapper} />)).toEqual(true);
		expect(
			wrapper.contains(
				<NavButton to="/home" isActive>
					Trang chủ
				</NavButton>,
			),
		).toEqual(true);
		expect(
			wrapper.contains(
				<NavButton to="/courses" isActive={false}>
					Chủ đề
				</NavButton>,
			),
		).toEqual(true);
		// expect(wrapper.contains(<NavButton to='/groups' isActive={false}>Groups</NavButton>)).toEqual(true);
		expect(
			wrapper.contains(
				<Link to="/logout" className={styles.LogoutBtn}>
					Đăng xuất
				</Link>,
			),
		).toEqual(true);
	});

	it('url=login, checking buttons', () => {
		wrapper.setProps({ url: '/login' });
		expect(wrapper.contains(<Link to="/" className={styles.LogoWrapper} />)).toEqual(true);
		expect(
			wrapper.contains(
				<Link to="/login" className={styles.NavButton + ' ' + styles.ActiveButton}>
					Login
				</Link>,
			),
		).toEqual(true);
		expect(
			wrapper.contains(
				<Link
					to="/join"
					className={styles.NavButton + ' ' + styles.LRMargin + ' ' + styles.SignUpPurple}
				>
					Đăng ký
				</Link>,
			),
		).toEqual(true);
	});

	it('NavButton check', () => {
		const navButton = shallow(
			<NavButton to="/home" isActive>
				Trang chủ
			</NavButton>,
		);
		expect(
			navButton.contains(
				<Link to="/home" className={styles.NavButton + ' ' + styles.ActiveButton}>
					Trang chủ
				</Link>,
			),
		).toEqual(true);
		navButton.setProps({ isActive: false });
		expect(
			navButton.contains(
				<Link to="/home" className={styles.NavButton}>
					Trang chủ
				</Link>,
			),
		).toEqual(true);
	});
});
