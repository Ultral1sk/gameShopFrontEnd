import React, { useState } from 'react'
import Map from '../Mapbox/Map'
import axios from 'axios'


const AccountContactFormPage = () => {

	const [state, setState] = useState({
		firstname: '',
		lastname: '',
		email: '',
		message: '',
		contactnumber: '',
		successMessage: '',
		errorMessage: '',
		isSent: false,
		isChecked: false,
	})


	const changeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setState(prevstate => ({
			...prevstate,
			[name]: value
		}))

	}

	const submitHandler = (e) => {
		e.preventDefault();

		const { firstname, lastname, email, contactnumber, message } = state

		axios.post('http://localhost:5000/api/auth/support', { firstname, lastname, email, contactnumber, message })
			.then(res => {
				if (res.status === 200) {
					setState({ successMessage: 'Message Sent' })
					setTimeout(() => {
						setState({ successMessage: '' })
						setState({
							firstname: '',
							lastname: '',
							email: '',
							message: '',
							contactnumber: '',
							successMessage: '',
							errorMessage: '',
						})
					}, 1500);



				} else {
					setState({ errorMessage: 'All inputs required' })
					setTimeout(() => {
						setState({ errorMessage: '' })
					}, 1000);

				}
			}).catch(err => {
				console.log(err)
			})
	}

	//console.log(`event value comming from addcontactformpage`,state)

	return (
		<div>
			<div class="container-fluid text-white">
				<div class="innerwrap">

					<section class="section1 clearfix">
						<div class="textcenter">
							<h2 class="shtext">Contact Us</h2>
							<span class="seperator "></span>
							{<h2 className="text-danger">{state.successMessage}</h2> || <h2 className="text-danger" >{state.errorMessage}</h2>}
						</div>
					</section>

					<section class="section2 clearfix">
						<div class="col2 column1 first">
							<Map />
						</div>
						<div class="col2 column2 last">
							<div class="sec2innercont">
								<div class="sec2addr">
									<p>Grafenberger Allee 87, 40237 Düsseldorf</p>
									<p><span class="collig">Phone :</span> +91 12345678</p>
									<p><span class="collig">Email :</span> gameshopJB@gmx.de</p>
									<p><span class="collig">Fax :</span> +91 12345678</p>
								</div>
							</div>
							<div class="sec2contactform">
								<h3 class="sec2frmtitle text-white">Want to Know More?? Drop Us a Mail</h3>
								<form onSubmit={submitHandler}>
									<div class="clearfix">
										<input autoComplete="off" name="firstname" value={state.firstname} onChange={changeHandler} class="col2 first" type="text" placeholder="FirstName" required />
										<input autoComplete="off" name="lastname" value={state.lastname} onChange={changeHandler} class="col2 last" type="text" placeholder="LastName" required />
									</div>
									<div class="clearfix">
										<input autoComplete="off" name="email" value={state.email} onChange={changeHandler} class="col2 first" type="Email" placeholder="Email" required />
										<input autoComplete="off" name="contactnumber" value={state.contactnumber} onChange={changeHandler} class="col2 last" type="number" placeholder="Contact Number" required />
									</div>
									<div class="clearfix">
										<textarea name="message" value={state.message} onChange={changeHandler} id="" cols="30" rows="7" required>Your message here...</textarea>
									</div>
									<div class="clearfix"><input type="submit" value="Send" /></div>
								</form>
							</div>

						</div>
					</section>

				</div>
			</div>
		</div>
	)
}

export default AccountContactFormPage
