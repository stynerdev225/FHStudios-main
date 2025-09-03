import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

interface ProductDetailProps {
  products: {
    id: string;
    name: string;
    price: number;
    image: string;
    description?: string;
    details?: string[];
    sizes?: string[];
  }[];
  type: 'merch' | 'book';
}

export function ProductDetail({ products, type }: ProductDetailProps) {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="pt-24 min-h-screen bg-zinc-100">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/store"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8"
        >
          <ArrowLeft size={20} />
          Back to Store
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white" data-editable data-name={`product-image-${id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-black text-black" data-editable data-name={`product-name-${id}`}>{product.name}</h1>
            <p className="text-3xl font-bold text-black" data-editable data-name={`product-price-${id}`}>${product.price}</p>

            {type === 'merch' && product.sizes && (
              <div>
                <h3 className="text-lg font-bold mb-3">Select Size</h3>
                <div className="flex gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-red-600 font-bold text-gray-700 hover:text-red-600"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {type === 'book' && (
              <div className="prose prose-lg">
                <p className="text-gray-600" data-editable data-name={`product-description-${id}`}>{product.description}</p>
              </div>
            )}

            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition" data-editable data-name={`product-button-${id}`}>
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            {product.details && (
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold mb-3" data-editable data-name={`product-details-title-${id}`}>Product Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-gray-600" data-editable data-name={`product-detail-${id}-${index}`}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}