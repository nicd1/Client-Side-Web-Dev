import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
	return (
        <div className="container">
            <h1>Home</h1>
            <p>
                <Link to='/lists'>Link to lists</Link>
            </p>
        </div>
	);
}
