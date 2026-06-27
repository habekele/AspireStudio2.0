import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { products } from '../data/products'
import { useInView } from '../hooks/useInView'

const CATEGORIES = ['All', 'Hair Care', 'Tools', 'Skincare', 'Nails']

function ProductCard({ product }) {
  const ref = useInView(0.1)
  return (
    <div
      ref={ref}
      className="fade-up bg-surface rounded-xl overflow-hidden border border-border shadow-s flex flex-col"
    >
      <div className="aspect-square overflow-hidden bg-gold-mist">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="inline-block self-start px-3 py-1 mb-3 rounded-full bg-gold-mist text-gold-dark font-sans text-[0.65rem] font-medium tracking-widest uppercase">
          {product.category}
        </span>
        <h3 className="font-serif text-lg font-medium text-text leading-snug mb-2">
          {product.name}
        </h3>
        <p className="font-sans text-sm font-light text-muted leading-relaxed flex-1 mb-5">
          {product.description}
        </p>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gold text-white font-sans text-sm font-medium hover:bg-gold-dark transition-colors duration-200"
        >
          Shop on Amazon
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  )
}

export default function AmazonPicks() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <>
      <Nav />
      <main className="bg-bg min-h-screen pt-[68px]">
        {/* Hero */}
        <section className="py-16 md:py-24 text-center px-6 border-b border-border">
          <div className="max-w-site mx-auto">
            <p className="font-sans text-[0.65rem] font-medium tracking-[0.3em] uppercase text-gold mb-4">
              Curated by Tru
            </p>
            <h1 className="font-serif text-display font-light text-text mb-4">
              Tru's Picks
            </h1>
            <p className="font-sans text-sm font-light text-muted max-w-md mx-auto leading-relaxed">
              Products I genuinely use and love — for clients and myself. Every link is an Amazon affiliate link, which means I earn a small commission at no extra cost to you.
            </p>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="sticky top-[68px] z-40 bg-bg/96 backdrop-blur-sm border-b border-border">
          <div className="max-w-site mx-auto px-6 md:px-8 overflow-x-auto">
            <ul className="flex gap-1 py-3 whitespace-nowrap">
              {CATEGORIES.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full font-sans text-xs font-medium transition-colors duration-150 ${
                      activeCategory === cat
                        ? 'bg-gold text-white'
                        : 'text-stone hover:text-text hover:bg-gold-mist'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Product grid */}
        <section className="py-12 md:py-16 px-6 md:px-8">
          <div className="max-w-site mx-auto">
            {filtered.length === 0 ? (
              <p className="text-center font-sans text-sm text-muted py-16">
                No products in this category yet — check back soon!
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Disclosure */}
        <div className="max-w-site mx-auto px-6 md:px-8 pb-12">
          <p className="font-sans text-[0.7rem] text-muted/70 text-center">
            As an Amazon Associate I earn from qualifying purchases. Prices and availability are subject to change.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
