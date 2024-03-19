const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const path = require('path');

const createProduct = async (req, res) => {
    // res.send('Create prodcut');
    req.body.user = req.user.userId;
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
    // res.send('Get All Products');
    const products = await Product.find({});
    res.status(StatusCodes.OK).json({ products, count: products.length });
};

const getSingleProduct = async (req, res) => {
    // res.send('Get Single Product');
    const { id: productId } = req.params;
    const product = await Product.findOne({ _id: productId }).populate('reviews');

    if (!product) {
        throw new CustomError.NotFoundError(`No product with id: ${productId}`);
    };

    res.status(StatusCodes.OK).json({ product });
};

const updateProduct = async (req, res) => {
    // res.send('Update Product');
    const { id: productId } = req.params;
    const product = await Product.findByIdAndUpdate(
        { _id: productId }, 
        req.body, 
        {new: true, runValidators: true 
    }); 

    if (!product) {
        throw new CustomError.NotFoundError(`No product with id: ${productId}`);
    };

    res.status(StatusCodes.OK).json({ product });
};

const deleteProduct = async (req, res) => {
    // res.send('Delete Product');
    const { id: productId } = req.params;
    const product = await Product.findOne({ _id: productId });

    if (!product) {
        throw new CustomError.NotFoundError(`No product with id: ${productId}`);
    };

    await product.deleteOne();
    res.status(StatusCodes.OK).json({ msg: 'Success! Product removed!'});
};

const uploadImage = async (req, res) => {
    // console.log(req.files);
    // res.send('Upload image');
    if (!req.files) {
        throw new CustomError.BadRequestError('No file uploaded!');
    };

    const productImage = req.files.image;
    if (!productImage.mimetype.startsWith('image')) {
        throw new CustomError.BadRequestError('Please upload image');
    };

    const maxSize = 1024 * 1024;
    if (productImage.size > maxSize) {
        throw new CustomError.BadRequestError('Please upload image smaller than 1MB');
    };

    const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`)

    await productImage.mv(imagePath);
    res.status(StatusCodes.OK).json({ image: `/uploads/${productImage.name}`});
};

module.exports = { 
    createProduct, 
    getAllProducts, 
    getSingleProduct, 
    updateProduct, 
    deleteProduct, 
    uploadImage 
};
