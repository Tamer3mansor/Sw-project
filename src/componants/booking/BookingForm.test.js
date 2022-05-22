import expect, {createSpy} from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import BookingForm from './BookingForm';

describe('Booking form', () => {
	let wrapper;
	let onSave = createSpy();

	beforeEach(()=> {
		const props = {
			booking: {},
			onSave: onSave
		};
		wrapper = mount(<BookingForm booking={props.booking} onSave={props.onSave} />);
	});


	it('should create appropriate fields', ()=>{
		const inputs = wrapper.find('input');
		expect(inputs.at(0).prop('name')).toEqual('firstName');
		expect(inputs.at(1).prop('name')).toEqual('lastName');
		expect(inputs.at(2).prop('name')).toEqual('diningDate');
		expect(inputs.at(3).prop('name')).toEqual('coverNo');
		expect(inputs.at(4).prop('name')).toEqual('phone');
	});

	it('should save the form on clicking save', ()=> {
		const saveButton = wrapper.find('input[type="submit"]');
		expect(saveButton.prop('type')).toBe('submit');
		saveButton.simulate('click');
		expect(onSave.calls.length).toEqual(1);
	});
});