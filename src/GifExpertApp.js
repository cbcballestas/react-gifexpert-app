import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch']);

	return (
		<>
			<h2 className="mt-3">GifExpertApp</h2>
			<hr />

			<AddCategory setCategories={setCategories} />

			{
				categories.map(cat => (
					<GifGrid
						key={cat}
						category={cat}
					/>
				))
			}
		</>
	);
};

export default GifExpertApp;
