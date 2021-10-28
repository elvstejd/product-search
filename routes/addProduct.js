const express = require('express');
const router = express.Router();
const prisma = require('../utils/db');
const { ProductCategory } = require('@prisma/client');

router.post('/', async (req, res, next) => {
    const name = req.body.name;
    const price = parseFloat(req.body.price);
    const category = req.body.category;

    await prisma.product.create({
        data: { name, price, category }
    });

    res.redirect('/products');
});

router.get('/', async (req, res, next) => {
    const categories = Object.values(ProductCategory);
    res.render('addProduct', { categories });
});

module.exports = router;
