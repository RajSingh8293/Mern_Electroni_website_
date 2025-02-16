import { products } from "../data/products.js";
import Product from "../models/product.model.js";

export const createManyProducts = async (req, res) => {
  try {
    // const {
    //   userId,
    //   name,
    //   title,
    //   description,
    //   brand,
    //   price,
    //   category,
    //   color,
    //   productCount,
    //   image,
    // } = req.body;

    // if (
    //   (!name || !title || !description || !brand || !price || category,
    //   !color || !image)
    // ) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "All fields are required",
    //   });
    // }
    await Product.deleteMany();
    const createProducts = Product.insertMany(products);

    const saveProducts = await createProducts.save();
    return res.status(201).json({
      success: true,
      message: "Products created successfully",
      products: saveProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with creating product",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      title,
      description,
      brand,
      price,
      category,
      color,
      productCount,
      image,
    } = req.body;

    if (
      (!name || !title || !description || !brand || !price || category,
      !color || !image)
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const product = await Product({
      userId: req.user?._id,
      name,
      title,
      description,
      brand,
      price,
      category,
      color,
      productCount,
      image,
    });

    await product.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with creating product",
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      res.status(500).json({
        success: false,
        message: "products not found",
      });
    }

    res.status(200).json({
      success: true,
      products,
      count: products?.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with creating product",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(500).json({
        success: false,
        message: "products not found",
      });
    }

    await Product.findByIdAndDelete(product);

    res.status(200).json({
      success: true,
      message: "Products deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with creating product",
    });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const {
      name,
      title,
      description,
      brand,
      price,
      category,
      color,
      productCount,
      image,
    } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(500).json({
        success: false,
        message: "products not found",
      });
    }

    const updateProduct = await Product.findByIdAndUpdate(
      product,
      {
        $set: {
          name,
          title,
          description,
          brand,
          price,
          category,
          color,
          productCount,
          image,
        },
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Products updated successfully",
      product: updateProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with creating product",
    });
  }
};
export const singleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(500).json({
        success: false,
        message: "products not found",
      });
    }

    res.status(200).json({
      success: true,
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with single product",
    });
  }
};
