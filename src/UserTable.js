import React, { Component } from 'react';
import './UserTable.css';

class UserTable extends Component {

	state = { filterText: '' }

	handleSearchChange = (e) => {
		this.setState({ filterText: e.target.value });
	}

	renderUserRow(user) {
		const { login, picture, name, location } = user;
		const userName = `${name.first} ${name.last}`;

		return (
			<div className="usertable__row" key={login.username}>
				<img 
					className="usertable__row-user-picture" 
					src={picture.medium} 
					alt={userName} 
				/>
				<div className="usertable__row-user-data">
					<div className="usertable__row-user-name">
						{userName}
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
		const { filterText } = this.state;
		const filteredUsers = userData.filter(user => 
			user.name.first.includes(filterText) || 
			user.name.last.includes(filterText)
		);
		const usersToDisplay = filteredUsers.length ? filteredUsers : userData;

		return (
			<div className="usertable">
				<input 
					className="usertable__search-input"
					type="text" 
					aria-label="Search Users" 
					placeholder="Search..." 
					onChange={this.handleSearchChange}
				/>
				<span className="usertable__search-hits">
					{usersToDisplay.length} results
				</span>
				{usersToDisplay.map(user => this.renderUserRow(user))}
			</div>
		)
	}
}

export default UserTable