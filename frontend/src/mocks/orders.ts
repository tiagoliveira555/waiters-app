import { Order } from '../types/Order';

export const orders: Order[] =
[
  {
    '_id': '6373c6a0e9d89049d1b4a378',
    'table': '1',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668529603280-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6373c6a0e9d89049d1b4a379'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1668530978513-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6373c6a0e9d89049d1b4a37a'
      }
    ],
  },
  {
    '_id': '63795f439730e140677dd544',
    'table': '2',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1668530978513-coca-cola.png',
          'price': 7,
        },
        'quantity': 1,
        '_id': '63795f439730e140677dd545'
      }
    ],
  }
];
