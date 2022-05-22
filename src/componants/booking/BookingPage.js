import React from 'react';
import { browserHistory } from 'react-router';

import toastr from 'toastr';
import BookingApi from '../../api/BookingApi';
import BookingForm from './BookingForm';
import BookingsList from './BookingsList';

class BookingPage extends React.Component {
	constructor(props, context){
		super(props, context);

		this.state = {
			booking: {},
			bookingsList: []
		};

		this.onFieldChange =this.onFieldChange.bind(this);
		this.onSaveForm = this.onSaveForm.bind(this);
	}

	componentDidMount() {
		BookingApi.listBookings()
			.then((bookings)=>{
				this.setState({bookingsList: bookings});
			});
	}

	onFieldChange(event) {
		const field = event.target.name;
		let booking = this.state.booking;
		booking[field] = event.target.value;
		return this.setState({booking: booking});
	}

	onSaveForm(event) {
		event.preventDefault();
		// let history = this.props.history;
		BookingApi.saveBooking(this.state.booking)
			.then(()=>{
				toastr.success('Booking saved');
				this.setState({booking: {}});
				// browserHistory.push('/seatings');
			});
	}
	
	render() {
		return (
		<div className="row">
			<div className="col-xs-8">
				<h1>Make a booking</h1>
				<BookingForm booking={this.state.booking}
					onSave={this.onSaveForm}
					onChange={this.onFieldChange} />
			</div>
			<div className="col-xs-4">
				<BookingsList bookings={this.state.bookingsList} />
			</div>
		</div>
		);
	}
}

export default BookingPage;
