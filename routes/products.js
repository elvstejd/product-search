const express = require('express');
const router = express.Router();
const prisma = require('../utils/db');

router.get('/', async (req, res) => {
    const search = req.query.search;
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: search
            }
        }
    });
    res.render('products', { products: products, search: search });
});

module.exports = router;
