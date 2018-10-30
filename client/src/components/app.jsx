import React from 'react';
import Guest from './guest.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false
		}
	}

	handleClick() {
		this.setState({
			clicked: true
		})
	}

	// conditional rendering

	render() {
		if (!this.state.clicked) {
			return (
				<div>
					<input type="date" id="start" />
					<input type="date" id="end" />
					<Guest />
				</div>
			)
		} else {
			return (
				<div><p>Nice Click</p></div>
			)
		}
	}
}

export default App;