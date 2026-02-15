export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Tailored Overcoat',
    price: '$895',
    image: '/assets/generated/cc-product-01.dim_800x1000.png'
  },
  {
    id: '2',
    name: 'Structured Blazer',
    price: '$695',
    image: '/assets/generated/cc-product-02.dim_800x1000.png'
  },
  {
    id: '3',
    name: 'Oxford Shirt',
    price: '$245',
    image: '/assets/generated/cc-product-03.dim_800x1000.png'
  },
  {
    id: '4',
    name: 'Wool Trousers',
    price: '$395',
    image: '/assets/generated/cc-product-04.dim_800x1000.png'
  },
  {
    id: '5',
    name: 'Cashmere Sweater',
    price: '$495',
    image: '/assets/generated/cc-product-05.dim_800x1000.png'
  },
  {
    id: '6',
    name: 'Leather Belt',
    price: '$195',
    image: '/assets/generated/cc-product-06.dim_800x1000.png'
  },
  {
    id: '7',
    name: 'Canvas Tote',
    price: '$295',
    image: '/assets/generated/cc-product-07.dim_800x1000.png'
  },
  {
    id: '8',
    name: 'Leather Boots',
    price: '$595',
    image: '/assets/generated/cc-product-08.dim_800x1000.png'
  }
];
