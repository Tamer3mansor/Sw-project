import React from 'react';
import BookingApi from '../../api/BookingApi';

const BookingView = ({booking, assignSeat}) => {
	let onSeatAssign = function(){
		if(confirm(`Are you sure you want to seat ${booking.firstName}?`)){
			assignSeat(booking);
		}
	};
	return (
		<div>
			<h3>{booking.firstName} {booking.lastName}</h3>
			<small>Booking #{booking.bookingId}</small><br/>
			<small>Time: {booking.diningDate}</small><br/>
			<small>Cover: {booking.coverNo}</small><br/>
			<small>Phone: {booking.phone}</small><br/>
			<div>
				<p className="pull-right">
					{(() => {
						if (!booking.isSeated) {
							return <button type="button" title="click to seat" onClick={onSeatAssign} className="btn btn-warning">Not seated</button>;
						} else {
							return <div className="success">Seated</div>;
						}
					})()}
				</p>
				<br/>
			</div>
			<hr/>
		</div>
	);
};

BookingView.propTypes = {
	booking: React.PropTypes.object.required,
	assignSeat: React.PropTypes.function
};

export default BookingView;