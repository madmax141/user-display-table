import React, { Component } from 'react';

class UserTable extends Component {

	renderUserRow(user) {
		const { login, picture, name, location } = user;

		return (
			<div className="usertable__row" key={login.username}>
				<div className="usertable__row-image-wrap">
					<img src={picture.thumbnail} />
				</div>
				<div className="usertable__row-user-data">
					<div classsName="usertable__row-user-name">
						{name.first} {name.last}
					</div>
					<div className="usertable__row-user-address">
						{location.street}, {location.city}, {location.state}, {location.postcode}
					</div>
				</div>
			</div>
		);
	}

	render() {
		const { userData } = this.props;

		return (
			<div className="usertable">
				{userData.map(user => this.renderUserRow(user))}
			</div>
		)
	}
}

export default UserTable