import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditDog = (props) => {
	const [ name, setName ] = useState('');
	const [ breed, setBreed ] = useState('');
	const [ age, setAge ] = useState(1);
	const [ errors, setErrors ] = useState({});

	const editDog = (e) => {
		e.preventDefault();
		const dog = {
			name,
			breed,
			age
		};
		axios
			.post('http://localhost:8000/api/dogs', dog)
			.then((res) => {
				if (res.data.errors) {
					setErrors(res.data.errors);
				} else {
					navigate('/');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="container">
			<h1> Form </h1>{' '}
			<form onSubmit={editDog}>
				<div className="form-group">
					<label> Name: </label>{' '}
					<input
						className="form-control"
						type="text"
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>{' '}
					{errors.name ? <p className="text-danger"> {errors.name.properties.message} </p> : ''}{' '}
				</div>{' '}
				<div className="form-group">
					<label> Breed: </label>{' '}
					<input
						className="form-control"
						type="text"
						onChange={(e) => setBreed(e.target.value)}
						value={breed}
					/>{' '}
					{errors.breed ? <p className="text-danger"> {errors.breed.properties.message} </p> : ''}{' '}
				</div>{' '}
				<div className="form-group">
					<label> Age: </label>{' '}
					<input
						className="form-control"
						type="number"
						onChange={(e) => setAge(e.target.value)}
						value={age}
					/>{' '}
					{errors.age ? <p className="text-danger"> {errors.age.properties.message} </p> : ''}{' '}
				</div>{' '}
				<button className="btn btn-primary" type="submit">
					Add Dog{' '}
				</button>{' '}
			</form>{' '}
		</div>
	);
};

export default EditDog;
