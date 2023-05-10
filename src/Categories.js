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
            setCategories(categoriesData);
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
            <div>
                <h2>All Categories:</h2>
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default CategoriesList;
