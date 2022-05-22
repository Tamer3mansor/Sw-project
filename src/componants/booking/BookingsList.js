import React from 'react';
import BookingApi from '../../api/BookingApi';
import BookingView from './BookingViewSingle';

class BookingsList extends React.Component {
	constructor (props, context) {
		super(props, context);

		this.state = {
			bookings: []
		};
		this.assignSeat = this.assignSeat.bind(this);
	}
	componentWillReceiveProps(nextProps){
		this.setState({bookings: nextProps.bookings});
	}
	assignSeat(booking){
		BookingApi.updateBooking(booking)
			.then((bookings)=>{
				this.setState({
					bookings: bookings
				});
			});
	}
	render(){
		return (
			<div>
				<h4>Bookings</h4>
				{this.state.bookings.map(booking =>
					<BookingView key={booking.bookingId} booking={booking} assignSeat={this.assignSeat} />
				)}
			</div>
		);
	}
}

export default BookingsList;
