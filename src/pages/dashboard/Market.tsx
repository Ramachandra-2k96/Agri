import { useState } from 'react'
import { FaShoppingCart, FaSearch, FaStar, FaArrowRight, FaPlusCircle } from 'react-icons/fa'

type Product = {
  id: string
  name: string
  price: number
  quantityAvailable: number
  category: string
  image: string
  description: string
  rating: number
}

const products: Product[] = [
  { id: '1', name: 'Tomatoes', price: 3, quantityAvailable: 50, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1444731961956-751ed90465a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvc3xlbnwwfHwwfHx8MA%3D%3D', description: 'Fresh farm-grown tomatoes, packed with nutrients.', rating: 4.5 },
  { id: '2', name: 'Potatoes', price: 2, quantityAvailable: 100, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1686544303805-54c175c60d8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D', description: 'High-quality, organic potatoes perfect for any dish.', rating: 4.0 },
  { id: '3', name: 'Wheat', price: 1, quantityAvailable: 200, category: 'Grains', image: 'https://media.istockphoto.com/id/1317546751/photo/cracked-wheat-or-dalia-in-a-plate-on-burlap-fabric-isolated-on-wooden-background-i.jpg?s=2048x2048&w=is&k=20&c=a2PA6q73ygqIK3mFxFSQnZwU0QlhAX68qGUTL3ADJ5M=', description: 'Premium quality wheat for bread and pasta production.', rating: 4.8 },
  { id: '4', name: 'Rice', price: 4, quantityAvailable: 150, category: 'Grains', image: 'https://images.unsplash.com/photo-1646980990815-1e97d5ee932f?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Premium aromatic rice, perfect for any meal.', rating: 5.0 },
]

export function MarketplacePage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedSort, setSelectedSort] = useState<string>('Price: Low to High')
  const [cart, setCart] = useState<{ [id: string]: number }>({}) // Cart with quantities
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState<boolean>(false)
  const [newProductDetails, setNewProductDetails] = useState<{ name: string, price: number, quantity: number, category: string }>({
    name: '',
    price: 0,
    quantity: 1,
    category: 'Vegetables',
  })

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)
    filterProducts(query, selectedCategory, selectedSort)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    filterProducts(searchQuery, category, selectedSort)
  }

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort)
    filterProducts(searchQuery, selectedCategory, sort)
  }

  const handleAddToCart = (product: Product, quantity: number) => {
    setCart(prevCart => {
      const newCart = { ...prevCart }
      newCart[product.id] = (newCart[product.id] || 0) + quantity
      return newCart
    })
  }

  const handleAddProduct = () => {
    const newProduct: Product = {
      id: (filteredProducts.length + 1).toString(),
      name: newProductDetails.name,
      price: newProductDetails.price,
      quantityAvailable: newProductDetails.quantity,
      category: newProductDetails.category,
      image: '/new-product.jpg', // You can replace this with an actual image URL.
      description: 'Freshly added product from farmer.',
      rating: 4.0,
    }
    setFilteredProducts([...filteredProducts, newProduct])
    setIsAddProductModalOpen(false)
  }

  const filterProducts = (query: string, category: string, sort: string) => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query) &&
      (category === 'All' || product.category === category)
    )

    if (sort === 'Price: Low to High') {
      filtered = filtered.sort((a, b) => a.price - b.price)
    } else if (sort === 'Price: High to Low') {
      filtered = filtered.sort((a, b) => b.price - a.price)
    } else if (sort === 'Quantity: High to Low') {
      filtered = filtered.sort((a, b) => b.quantityAvailable - a.quantityAvailable)
    }

    setFilteredProducts(filtered)
  }

  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <header className="flex items-center justify-between px-6 py-6 bg-green-700 shadow-lg md:px-12">
        <h1 className="text-4xl font-extrabold tracking-wider text-white">Farmers Marketplace</h1>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="p-3 text-gray-800 placeholder-gray-500 transition duration-300 ease-in-out bg-white rounded-full w-72 md:w-96 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <FaSearch className="absolute text-gray-500 right-3" />
        </div>
      </header>

      <div className="px-6 py-8 space-y-8 md:px-12">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex space-x-2">
            <button
              onClick={() => handleCategoryChange('All')}
              className="px-5 py-2 text-white transition-all duration-300 ease-in-out bg-green-800 rounded-lg hover:bg-green-700"
            >
              All
            </button>
            <button
              onClick={() => handleCategoryChange('Vegetables')}
              className="px-5 py-2 text-gray-800 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-lg hover:bg-green-100"
            >
              Vegetables
            </button>
            <button
              onClick={() => handleCategoryChange('Grains')}
              className="px-5 py-2 text-gray-800 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-lg hover:bg-green-100"
            >
              Grains
            </button>
          </div>

          <select
            value={selectedSort}
            onChange={(e) => handleSortChange(e.target.value)}
            className="px-4 py-2 text-gray-700 transition-all duration-300 ease-in-out border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Quantity: High to Low">Quantity: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="transition-all duration-300 ease-in-out transform bg-white rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl"
            >
              <img src={product.image} alt={product.name} className="object-cover w-full h-56 rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="mt-2 font-bold text-green-500">${product.price}</p>
                <div className="flex items-center mt-2 space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className={`text-yellow-500 ${index < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`} />
                  ))}
                  <span className="text-sm text-gray-500">({product.rating})</span>
                </div>
                <p className="mt-3 text-sm text-gray-700">{product.description}</p>
                <div className="flex justify-between mt-4">
                  <input
                    type="number"
                    min="1"
                    max={product.quantityAvailable}
                    className="w-16 p-2 text-gray-800 border rounded-lg"
                    defaultValue="1"
                    id={`buy-quantity-${product.id}`}
                  />
                  <button
                    className="px-4 py-2 text-white transition-all duration-300 bg-green-600 rounded-lg hover:bg-green-500"
                    onClick={() =>
                      handleAddToCart(product, Number((document.getElementById(`buy-quantity-${product.id}`) as HTMLInputElement).value))
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-6 right-6">
          <button
            onClick={() => setIsAddProductModalOpen(true)}
            className="px-4 py-4 text-white transition-all duration-300 bg-green-600 rounded-full shadow-lg hover:bg-green-500"
          >
            <FaPlusCircle className="text-3xl" />
          </button>
        </div>
      </div>

      {isAddProductModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-1/3 p-8 bg-white rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800">Add Your Product</h3>
            <input
              type="text"
              placeholder="Product Name"
              className="w-full p-2 mt-4 border rounded-lg"
              value={newProductDetails.name}
              onChange={(e) => setNewProductDetails({ ...newProductDetails, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Price"
              className="w-full p-2 mt-4 border rounded-lg"
              value={newProductDetails.price}
              onChange={(e) => setNewProductDetails({ ...newProductDetails, price: Number(e.target.value) })}
            />
            <input
              type="number"
              placeholder="Quantity Available"
              className="w-full p-2 mt-4 border rounded-lg"
              value={newProductDetails.quantity}
              onChange={(e) => setNewProductDetails({ ...newProductDetails, quantity: Number(e.target.value) })}
            />
            <select
              className="w-full p-2 mt-4 border rounded-lg"
              value={newProductDetails.category}
              onChange={(e) => setNewProductDetails({ ...newProductDetails, category: e.target.value })}
            >
              <option value="Vegetables">Vegetables</option>
              <option value="Grains">Grains</option>
            </select>
            <button
              onClick={handleAddProduct}
              className="w-full py-2 mt-4 text-white transition-all duration-300 bg-green-600 rounded-lg hover:bg-green-500"
            >
              Add Product
            </button>
            <button
              onClick={() => setIsAddProductModalOpen(false)}
              className="w-full py-2 mt-2 text-white transition-all duration-300 bg-red-600 rounded-lg hover:bg-red-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
