import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import React, { useState, useEffect } from "react";
import Commerce from '@chec/commerce.js';

const commerce = new Commerce('pk_51720ae47ded79d12b2ae163d6415b6ad1f2b40b8a004');

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const { data: categoriesData } = await commerce.categories.list();
            setCategories(categoriesData.slice(0, 3)); // Slice only the first 3 categories
        } catch (error) {
            console.log("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <>
            <Menu />
            <Header />
            <div className='category_images col'>
                <h2>Top 3 Categories:</h2>
                <ul>
                    {categories.map((category, index) => (
                        <li key={category.id}>
                            {index === 1 ? (
                                <img src="https://i.ibb.co/hWTjpNq/hills-nav2020-logo-png-rendition-200-200.webp" alt={category.name} />
                            ) : index === 2 ? (
                                <img src="https://i.ibb.co/1GPwPpt/Royal-Canin-Logo-svg.png" alt={category.name} />
                            ) : (
                                <img src="https://i.ibb.co/fHQJbVk/pedigree-us-logo-0.webp" alt={category.name} />
                            )}
                            {category.name}
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default CategoriesList;
