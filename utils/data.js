import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Adrian Mason',
      email: 'adrian@user.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true
    },
    {
      name: 'Carl Dunbar',
      email: 'carl@user.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false
    },
  ],
  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A very popular shirt'
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      isFeatured: true,
      featuredImage: '/images/banner2.jpg',
      price: 80,
      brand: 'Adidas',
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: 'Athletic fit shirt'
    },
    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/shirt3.jpg',
      price: 90,
      brand: 'Polo',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Slim fitting shirt'
    },
    {
      name: 'Golf Pants',
      slug: 'golf-pants',
      category: 'Pants',
      image: '/images/pants1.jpg',
      price: 90,
      brand: 'Dockers',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Comfortable golf pants'
    },
    {
      name: 'Slim Fit Pants',
      slug: 'slim-fit-pants',
      category: 'Pants',
      image: '/images/pants2.jpg',
      price: 95,
      brand: 'Lucky Brand',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Most popular slim fitting pants'
    },
    {
      name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/pants3.jpg',
      price: 75,
      brand: 'Wrangler',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'OG pair of pants'
    },
  ]
}

export default data