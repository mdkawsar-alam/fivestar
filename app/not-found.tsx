import Link from "next/link"
import Header from "@/components/sheare/Header/Header"
import Footer from "@/components/sheare/Footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center bg-white px-6 py-24">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">This page could not be found.</h2>

          <p className="text-gray-600 mb-6">Fivester — Premium hardware & electrical solutions for homes and businesses across Saudi Arabia.</p>

          <div className="bg-slate-50 p-6 rounded-lg text-left mb-6">
            <p className="font-semibold">Location:</p>
            <p className="text-sm text-gray-700 mb-2">Al Jishah, Al-Ahsa Governorate, Eastern Province, Saudi Arabia</p>

            <p className="font-semibold">WhatsApp:</p>
            <p className="text-sm text-gray-700 mb-2">+966 50 306 9108</p>

            <p className="font-semibold">Email:</p>
            <p className="text-sm text-gray-700">support@fivestarsa.com</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="inline-block bg-[#00843D] text-white font-semibold py-3 px-6 rounded-lg">Home</Link>
            <Link href="/products" className="inline-block bg-gray-100 text-gray-900 font-semibold py-3 px-6 rounded-lg">Products</Link>
            <Link href="/contact" className="inline-block bg-gray-100 text-gray-900 font-semibold py-3 px-6 rounded-lg">Contact</Link>
          </div>

          <p className="text-sm text-gray-500 mt-8">If you think this is an error, check the URL or get in touch via WhatsApp or Email.</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
