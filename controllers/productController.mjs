import slugify from "slugify";
import productModel from "../models/productModel.mjs";
import fs from "fs";

export const createProductController = async (req, res) => {
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;

    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is required" });
      case !description:
        return res.status(500).send({ error: "description is required" });
      case !price:
        return res.status(500).send({ error: "price is required" });
      case !category:
        return res.status(500).send({ error: "category is required" });
      case !quantity:
        return res.status(500).send({ error: "quantity is required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is required and should be less than 1mb" });
    }

    const products = new productModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      message: "Product created successfully",
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};

export const getProductController = async (req, res) => {
  try {
    const products = await productModel.find({}).select("-photo").limit(6).sort({createAt: -1}).populate("category");
    res.status(200).send({
      success: true,
      countTotal: products.length,
      message: "All products",
      products,

    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: "getiing product failed",
    });
  }
};

export const getSingleProductController = async (req, res) => {
    try {
        const product = await productModel.findOne({ slug: req.params.slug }).select("-photo").populate("category");
        res.status(200).send({
            success: true,
            message: "Single product Found successfully",
            product,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            error,
            message: "Error while getting single product",
        })
    }
}

export const getProductPhotoController = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.productId).select("photo");
        if (product.photo.data) {
            res.set("Content-type", product.photo.contentType);
            return res.status(200).send(product.photo.data);
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            error,
            message: "Error while getting product photo",
        })
    }
}



export const deleteProductController = async (req, res) =>{
  try {
    await productModel.findByIdAndDelete(req.params.productId).select("-photo")
    res.status(200).send({
      success: true,
      message: "Product deleted successfully",
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error while deleting product",
      error
    })
  }

}


export const updateProductController = async (req, res) =>{
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;

    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is required" });
      case !description:
        return res.status(500).send({ error: "description is required" });
      case !price:
        return res.status(500).send({ error: "price is required" });
      case !category:
        return res.status(500).send({ error: "category is required" });
      case !quantity:
        return res.status(500).send({ error: "quantity is required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is required and should be less than 1mb" });
    }

    const products = await productModel.findByIdAndUpdate(req.params.productId, {...req.fields, slug : slugify(name)},{new:true});
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      message: "Product created successfully",
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};
