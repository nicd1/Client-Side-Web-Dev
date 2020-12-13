import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
	return (
        <div className="container">
            <h1>Home</h1>
            <p>
                <Link to='/home'>Link to home</Link>
            </p>
        </div>
	);
}
