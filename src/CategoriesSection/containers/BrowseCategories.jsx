import React from 'react';
import { categoriesList } from "../../assets/data";
import { CategoriesCard } from '../components/CategoriesCard';

export const BrowseCategories = () => {
    return (
        <section className="home-cat-sec text-center">
            <div className="container">
                <h2 className="site-title">Browse by top categories</h2>
                <div className="row">
                    {categoriesList.map(item => (
                        <CategoriesCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}