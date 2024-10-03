'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Page = () => {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name: '',
        category: '',
        price: '',
        quantity: '',
        description: '',
        img: '',
    });

    const router = useRouter();

    const fetchProducts = async () => {
        const res = await fetch('/api/products');
        const products = await res.json();
        setProducts(products);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleInputChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
    };

    const handleEditClick = (product) => {
        setEditProduct(product);
        setNewProduct({
            name: product.name,
            category: product.category, 
            price: product.price,
            quantity: product.quantity, 
            description: product.description,
            img: product.img, 
        });
        setIsModalOpen(true);
    };

    const handleDetailsClick = (id) => {
        router.push(`/products/${id}`);
    };

    const handleDeleteClick = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        
        if (confirmDelete) {
            try {
                const res = await fetch(`/api/products/${id}`, {
                    method: 'DELETE',
                });
    
                if (res.ok) {
                    setProducts(products.filter(product => product._id !== id)); // Remove the deleted product from the state
                    alert("Product deleted successfully");
                } else {
                    const { message } = await res.json();
                    alert(`Failed to delete product: ${message}`);
                }
            } catch (error) {
                console.error("Error deleting product:", error);
                alert("An error occurred while trying to delete the product");
            }
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const method = editProduct ? 'PUT' : 'POST';
        const url = editProduct ? `/api/products/${editProduct._id}` : '/api/products';

        const res = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        });

        if (res.ok) {
            const product = await res.json();
            if (editProduct) {
                setProducts(products.map((p) => (p._id === product._id ? product : p)));
            } else {
                setProducts([...products, product]);
            }
            setIsModalOpen(false);
            setEditProduct(null);
            setNewProduct({ name: '', category: '', price: '', quantity: '', description: '', img: '' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto">
                <h1 className="text-black text-4xl font-bold mb-8 text-center">Products</h1>

                {/* Create Product Button at the Top Right */}
                <div className="mb-6 flex justify-end">
                    <button
                        onClick={() => {
                            setEditProduct(null);
                            setNewProduct({ name: '', category: '', price: '', quantity: '', description: '', img: '' });
                            setIsModalOpen(true);
                        }}
                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Create Product
                    </button>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products?.map((product) => (
                        <div
                            key={product?._id}
                            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="aspect-w-16 aspect-h-9 mb-4">
                                {product?.img ? (
                                    <Image
                                        src={product?.img}
                                        alt={product?.name}
                                        className="object-cover w-full h-full rounded-lg"
                                        width={500}
                                        height={300}
                                    />
                                ) : (
                                    <div className="bg-gray-200 flex items-center justify-center rounded-lg text-gray-500">
                                        No Image Available
                                    </div>
                                )}
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-gray-900">{product?.name}</h2>
                            <p className="text-gray-600">Price: ${product?.price}</p>
                            <p className="text-gray-600">Category: {product?.category}</p> {/* Display category */}
                            <p className="text-gray-700 mt-2 mb-4">Quantity: {product?.quantity}</p> {/* Display quantity */}
                            <p className="text-gray-700 mt-2 mb-4">{product?.description}</p>
                            <div className="flex space-x-4">
                                <button
                                    onClick={() => handleDetailsClick(product._id)}
                                    className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                                >
                                    Details
                                </button>
                                <button
                                    onClick={() => handleEditClick(product)}
                                    className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteClick(product._id)}
                                    className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-8">
                        <h2 className="text-2xl font-bold mb-4 text-center">{editProduct ? 'Edit Product' : 'Create Product'}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-black mb-2">Product Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newProduct.name}
                                    onChange={handleInputChange}
                                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-black mb-2">Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={newProduct.category}
                                    onChange={handleInputChange}
                                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-black mb-2">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={newProduct.price}
                                    onChange={handleInputChange}
                                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-black mb-2">Quantity</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={newProduct.quantity}
                                    onChange={handleInputChange}
                                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-black mb-2">Description</label>
                                <textarea
                                    name="description"
                                    value={newProduct.description}
                                    onChange={handleInputChange}
                                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-black mb-2">Image URL</label>
                                <input
                                    type="text"
                                    name="img"
                                    value={newProduct.img}
                                    onChange={handleInputChange}
                                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 mr-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                                >
                                    {editProduct ? 'Update Product' : 'Create Product'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
