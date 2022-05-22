import React from 'react';
import { Link, IndexLink } from 'react-router';

const Menu = () => {

	return (
		<nav>
			<ul className="nav nav-pills pull-right">
				<li className={location.pathname === '/' && 'active'}>
					<IndexLink to="/" activeClassName="active">Home</IndexLink>
				</li>
				<li className={location.pathname.startsWith('/booking') && 'active'}>
					<Link to="/booking" activeClassName="active">Bookings</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
