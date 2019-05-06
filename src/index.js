import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
	const items = ['Drink tea', 'Learn React', 'Build awesome application']
	return (
		<ul>
			<li>{items[0]}</li>
			<li>{items[1]}</li> 
			<li>{items[2]}</li> 
		</ul>
	);
};

const AppHeader = () => {
	return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
	return <input placeholder="search"/>;
}

const App = () => {
	const isLoggedIn = true;
	const loginBox = <span>Log in please</span>;
	const welcomeBox = <span>Welcome back</span>
	
	return (
		<div>
			{ isLoggedIn ? welcomeBox : loginBox } 
			<AppHeader />
			<SearchPanel />
			<TodoList />
		</div>
	);
};


ReactDOM.render(<App />, document.getElementById('root'));

