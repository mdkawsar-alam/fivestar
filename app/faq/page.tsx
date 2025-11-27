import React from "react"

export default function FAQPage() {
  const faqs = [
    {
      category: "Delivery & Shipping",
      questions: [
        {
          q: "What is your delivery timeline?",
          a: "Same-day delivery is available in Riyadh and surrounding areas. For other regions across Saudi Arabia, delivery typically takes 1-3 business days.",
        },
        {
          q: "Do you charge for delivery?",
          a: "Delivery charges depend on your location and order size. Free delivery is available for orders above SAR 500 within Riyadh.",
        },
        {
          q: "Can I track my order?",
          a: "Yes! Once your order is confirmed, you'll receive tracking details via WhatsApp or SMS.",
        },
        {
          q: "What if I'm not available for delivery?",
          a: "You can schedule delivery at a convenient time. Contact us via WhatsApp to reschedule if needed.",
        },
      ],
    },
    {
      category: "Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept cash on delivery (COD), bank transfer, credit cards, and debit cards. Choose the method that works best for you.",
        },
        {
          q: "Is it safe to pay online?",
          a: "Yes, we use secure payment gateways to protect your financial information. Your data is encrypted and protected.",
        },
        {
          q: "Do you offer installment payment?",
          a: "For large orders above SAR 5000, we can arrange flexible payment terms. Contact us for details.",
        },
      ],
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 15-day money-back guarantee on all products. Items must be unused and in original packaging.",
        },
        {
          q: "How do I initiate a return?",
          a: "Contact us via WhatsApp with your order number and reason for return. We'll arrange pickup at no extra cost.",
        },
        {
          q: "How long does refund take?",
          a: "Refunds are processed within 5-7 business days after we receive and inspect the returned item.",
        },
      ],
    },
    {
      category: "Services",
      questions: [
        {
          q: "How far do your technicians travel?",
          a: "Our certified technicians service all major regions in Saudi Arabia including Riyadh, Jeddah, Dammam, and surrounding areas.",
        },
        {
          q: "What warranty do services have?",
          a: "All services come with a 30-day satisfaction guarantee. If you're not satisfied, we'll provide free follow-up service.",
        },
        {
          q: "Can I book services online?",
          a: "Yes! Click the 'Book Service' button or message us on WhatsApp with your service requirements and preferred date/time.",
        },
        {
          q: "Are your technicians certified?",
          a: "All our technicians are highly trained and certified professionals with years of experience in electrical and plumbing work.",
        },
      ],
    },
    {
      category: "Products",
      questions: [
        {
          q: "Are all products genuine?",
          a: "100% yes! We only stock authentic, branded products. All items come with manufacturer warranty.",
        },
        {
          q: "Can I order products I don't see on the website?",
          a: "Absolutely! Contact us via WhatsApp and we can source most hardware and electrical products for you.",
        },
        {
          q: "Do you offer bulk discounts?",
          a: "Yes! For bulk orders (10+ items), we offer competitive wholesale pricing. Contact us for a quote.",
        },
      ],
    },
    {
      category: "General",
      questions: [
        {
          q: "What are your working hours?",
          a: "Saturday to Thursday: 8 AM - 10 PM | Friday: 4 PM - 10 PM | WhatsApp support available 24/7",
        },
        {
          q: "How can I contact customer support?",
          a: "You can reach us via WhatsApp (24/7), phone during business hours, or email. Response time is usually within 30 minutes.",
        },
        {
          q: "Do you have a physical store?",
          a: "Yes! We're located in Riyadh. Visit us during business hours or contact us to schedule an appointment.",
        },
        {
          q: "Can I request a custom quote?",
          a: "Yes! For projects requiring multiple items or services, contact us with details and we'll provide a detailed quote.",
        },
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">
            Find answers to common questions about our products and services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {faqs.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-[#00843D]">
                {section.category}
              </h2>

              <div className="space-y-4">
                {section.questions.map((faq, qIdx) => (
                  <details
                    key={qIdx}
                    className="bg-slate-50 p-6 rounded-lg cursor-pointer group hover:shadow-md transition-shadow"
                  >
                    <summary className="font-bold text-slate-900 text-lg flex justify-between items-center">
                      <span>{faq.q}</span>
                      <span className="group-open:rotate-180 transition-transform text-[#00843D]">▼</span>
                    </summary>
                    <p className="text-gray-700 mt-4 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Our customer support team is ready to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/966XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a
              href="/contact"
              className="inline-block bg-[#00843D] hover:bg-[#006630] text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
