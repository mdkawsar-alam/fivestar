import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { productsData, type Product } from "@/lib/data/products"
import { WHATSAPP_NUMBER } from "@/lib/constants"

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = productsData.find((p) => p.id === id)
  if (!product) return { title: "Product not found" }

  return {
    title: `${product.name_en} / ${product.name_ar} | Fivester`,
    description: product.description,
    openGraph: {
      title: `${product.name_en} / ${product.name_ar} | Fivester`,
      description: product.description,
      images: [product.image],
      url: `https://fivestarsa.com/products/${product.id}`,
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const product = productsData.find((p) => p.id === id) as Product | undefined
  if (!product) return notFound()

  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in *${product.name_en} / ${product.name_ar}* (ID: ${product.id}). Price: ${product.currency} ${product.price}. Please provide availability and next steps.`
  )
  const phoneNumberDigits = WHATSAPP_NUMBER.replace(/\D/g, "")
  const whatsappUrl = `https://wa.me/${phoneNumberDigits}?text=${whatsappMessage}`

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Image gallery / main image */}
          <div className="space-y-4">
            <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={`${product.name_en} / ${product.name_ar}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {/* Thumbnails - placeholder duplicates for now */}
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                  <img src={product.image} alt={`${product.name_en} / ${product.name_ar} ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name_en}</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4" dir="rtl">{product.name_ar}</h2>
            <p className="text-2xl text-[#00843D] font-bold mb-4">{product.currency} {product.price}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Category: {product.category}</li>
                <li>Subcategory: {product.subCategory}</li>
                <li>Rating: {product.rating} ({product.reviews} reviews)</li>
                <li>{product.inStock ? "In stock" : "Out of stock"}</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Order via WhatsApp
              </a>

              <a
                href="/contact"
                className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Ask a Question
              </a>
            </div>

            {/* Additional details */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Product Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="font-semibold">Material</p>
                  <p>High-quality components</p>
                </div>
                <div>
                  <p className="font-semibold">Warranty</p>
                  <p>Manufacturer warranty included</p>
                </div>
                <div>
                  <p className="font-semibold">Delivery</p>
                  <p>Same-day in Riyadh, 1-3 days nationwide</p>
                </div>
                <div>
                  <p className="font-semibold">Return</p>
                  <p>15-day return policy</p>
                </div>
              </div>
            </div>

            {/* Reviews summary */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Customer Reviews</h4>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold">Ahmed</div>
                    <div className="text-yellow-400">★★★★☆</div>
                  </div>
                  <div className="text-gray-700 text-sm">Great product, fast delivery.</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold">Fatima</div>
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                  <div className="text-gray-700 text-sm">Very satisfied with the quality.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${product.name_en} / ${product.name_ar}`,
            image: [product.image],
            description: product.description,
            sku: product.id,
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: product.currency,
              availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
              url: `https://fivestarsa.com/products/${product.id}`,
            },
          }),
        }}
      />
    </section>
  )
}
