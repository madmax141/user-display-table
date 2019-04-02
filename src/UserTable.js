import React, { Component } from 'react';
import './UserTable.css';

class UserTable extends Component {

	state = { filterText: '' }

	handleSearchChange = (e) => {
		this.setState({ filterText: e.target.value });
	}

	renderUserRow(user) {
		const { picture, name, location } = user;
		const userName = `${name.first} ${name.last}`;

		return (
			<div className="usertable__row" key={userName}>
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
		const { userData: allUsers, loading, error } = this.props;
		const { filterText } = this.state;
		const filteredUsers = allUsers.filter(user => 
			user.name.first.includes(filterText.toLowerCase()) || 
			user.name.last.includes(filterText.toLowerCase())
		);
		const usersToDisplay = filteredUsers.length ? filteredUsers : allUsers;

		return (
			<div className="usertable">
				<input 
					className="usertable__search-input"
					type="text" 
					aria-label="Search Users" 
					placeholder="Search..." 
					onChange={this.handleSearchChange}
				/>
				<span className="usertable__search-hits" aria-live="polite">
					{usersToDisplay.length} results
				</span>
				<div className="usertable__users" aria-live="polite">
					{error ? 
						"There was an error fetching users, please try again" : 
						loading ? 
							"Loading..." :
							usersToDisplay.map(user => this.renderUserRow(user))
					}
				</div>
			</div>
		)
	}
}

export default UserTable