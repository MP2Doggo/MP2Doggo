import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
const Brand = () => {
    return (
        <>
            <Menu />
            <Header />
            <div className="container" id="categories">
                <h3 className="d-flex justify-content-center justify-content-sm-start mt-5 mb-3 ">
                    Shop by Brand
                </h3>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-4">
                        <a href="#" className="a text-secondary nav-link">
                            <div className="card border-0">
                                <img
                                    src="https://i.ibb.co/CKmnjjq/sd-canine-puppy-small-bites-dry-product-Shot-500.webp"
                                    className="card-img-top border border-warning rounded-circle"
                                    alt="..."
                                    width="100"
                                    height="200"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Hills</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-4">
                        <a href="#" className="a text-secondary nav-link">
                            <div className="card border-0">
                                <img
                                    src="https://i.ibb.co/bR9d18g/Royal-Canin-Hypoallergenic-Wet-Dog-Food-philippines.webp"
                                    className="card-img-top border border-warning rounded-circle"
                                    alt="..."
                                    width="100"
                                    height="200"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Royal Canin</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-4">
                        <a href="#" className="a text-secondary nav-link">
                            <div className="card border-0">
                                <img
                                    src="https://i.ibb.co/LYsQTnS/Pedigree-Puppy-Chicken-Liver-Egg-Loaf-with-Vegetables-Pouch-dog-food-philippines.webp"
                                    className="card-img-top border border-warning rounded-circle"
                                    alt="..."
                                    width="100"
                                    height="200"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Pedigree</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-4">
                        <a href="#" className="a text-secondary nav-link">
                            <div className="card border-0">
                                <img
                                    src="https://i.ibb.co/x5dZPY2/9327556000102-1024x.webp"
                                    className="card-img-top border border-warning rounded-circle"
                                    alt="..."
                                    width="100"
                                    height="200"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Vitality</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-4">
                        <a href="#" className="a text-secondary nav-link">
                            <div className="card border-0">
                                <img
                                    src="https://i.ibb.co/QKHXrGt/7394780446898-3-87456ee0-1ab5-452d-86e9-cb6986ed804e-350x500.webp"
                                    className="card-img-top border border-warning rounded-circle"
                                    alt="..."
                                    width="100"
                                    height="200"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Aozi</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-4">
                        <a href="#" className="a text-secondary nav-link">
                            <div className="card border-0">
                                <img
                                    src="https://i.ibb.co/PT7F5y7/image-165388-Zs7z-M3i.jpg"
                                    className="card-img-top border border-warning rounded-circle"
                                    alt="..."
                                    width="100"
                                    height="200"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Acana</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-4">
                        <a href="#" className="a text-secondary nav-link">
                            <div className="card border-0">
                                <img
                                    src="https://i.ibb.co/2KDTNfZ/Purina-Alpo-Beef-Vegetables-with-Milk-Essentials-Puppy-Dry-Dog-Food-philippines.webp"
                                    className="card-img-top border border-warning rounded-circle"
                                    alt="..."
                                    width="100"
                                    height="200"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Alpo</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-4">
                        <a href="#" className="a text-secondary nav-link">
                            <div className="card border-0">
                                <img
                                    src="https://i.ibb.co/qYvWmKZ/Holistic-Recipe-Dog-Food-philippines.webp"
                                    className="card-img-top border border-warning rounded-circle"
                                    alt="..."
                                    width="100"
                                    height="200"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Holistic</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-4">
                        <a href="#" className="a text-secondary nav-link">
                            <div className="card border-0">
                                <img
                                    src="https://i.ibb.co/PWz3PYS/ns-ori-dog-original-fr-lg.jpg"
                                    className="card-img-top border border-warning rounded-circle"
                                    alt="..."
                                    width="100"
                                    height="200"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Orijen</h5>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
            <Footer />

        </>
    );
};

export default Brand;