import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router';
import AllDogs from './components/AllDogs';
import NewDog from './components/NewDog';
import EditDog from './components/EditDog';

function App() {
	const [ active, setActive ] = useState('Home');

	return (
		<div className="container-fluid">
			<div className="jumbotron bg-light text-dark">
				<h1> Disco Dawgs </h1>{' '}
			</div>{' '}
			<ul className="nav nav-tabs mb-5">
				<li className="nav-item" onClick={(e) => setActive('/')}>
					<Link className={active === '/' ? 'nav-link active' : 'nav-link'} to="/">
						Home
					</Link>
				</li>
				<li className="nav-item" onClick={(e) => setActive('/new')}>
					<Link className={active === '/' ? 'nav-link active' : 'nav-link'} to="/new">
						Add Dog
					</Link>
				</li>
			</ul>
			<Router>
				<AllDogs path="/" />
				<NewDog path="/new" />
				<EditDog path="/edit/:_id" />
			</Router>{' '}
		</div>
	);
}

export default App;
