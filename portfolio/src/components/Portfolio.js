import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = ()=>(
    <div>
        <h2>Portfolio</h2>
        <p>Here you can see my projects</p>
        <Link to="portfolio/item1">Item One</Link>
        <Link to="portfolio/item2">Item Two</Link>
    </div>
)

export default Portfolio;