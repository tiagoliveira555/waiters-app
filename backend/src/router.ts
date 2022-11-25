import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { createCatetory } from './useCases/categories/createCategory';
import { listCategory } from './useCases/categories/listCategories';
import { listProductByCategory } from './useCases/categories/listProducdByCategory';

import { createProduct } from './useCases/products/createProduct';
import { listProducts } from './useCases/products/listProducts';

import { listOrders } from './useCases/orders/listOrders';
import { createOrder } from './useCases/orders/createOrder';
import { changeOrderStatus } from './useCases/orders/chageOrderStatus';
import { cancelOrder } from './useCases/orders/cancelOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

router.get('/categories', listCategory);
router.post('/categories', createCatetory);

router.get('/categories/:categoryId/products', listProductByCategory);

router.get('/products', listProducts);
router.post('/products', upload.single('image'), createProduct);

router.get('/orders', listOrders);
router.post('/orders', createOrder);
router.patch('/orders/:orderId', changeOrderStatus);
router.delete('/orders/:orderId', cancelOrder);
