'use client'
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { MapPin, Mail, Star, ChefHat, Truck } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: 'The Right Season Mobile Kitchen',
  description:
    'Fresh, seasonal ingredients crafted into unforgettable meals. Experience culinary excellence on wheels, bringing farm-to-table dining to your neighborhood.',
  openGraph: {
    title: 'The Right Season Mobile Kitchen',
    description:
      'Fresh, seasonal ingredients crafted into unforgettable meals. Experience culinary excellence on wheels, bringing farm-to-table dining to your neighborhood.',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'The Right Season Mobile Kitchen'
      }
    ],
  },
}

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src='/assets/logo.png'
            alt="The Right Season Mobile Kitchen" 
            className="h-32 w-32 md:h-48 md:w-48 mx-auto mb-8"
          />
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-900 mb-6 leading-tight"
          >
            The Right Season
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-amber-800 mb-4 font-medium"
          >
            Mobile Kitchen
          </motion.p>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-amber-700 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Fresh, seasonal ingredients crafted into unforgettable meals. 
            Experience culinary excellence on wheels, bringing farm-to-table dining to your neighborhood.
          </motion.p>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
           <Link
            href="/"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            <ChefHat className="w-5 h-5 mr-2" />
            View Our Menu
          </Link>
          <Link
            href="/"
            className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Find Us Today
          </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
     <section className="py-30 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-amber-900 mb-6"
          >
            About the Chef
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Dontray Clark </strong>is a seasoned chef and proud Navy veteran hailing from Radcliff, KY. His life experiences has taken him across the globe, where he has immersed himself in diverse cultures and savored an array of exquisite dishes.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Throughout his career, Dontray has brought this wealth of knowledge and creativity to numerous esteemed establishments across Hardin County. His expertise spans bustling commercial kitchens, acclaimed restaurants, and exclusive private events—each setting benefiting from his unwavering commitment to culinary excellence and innovative cuisine.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                His latest venture, The Right Season, is a vibrant mobile kitchen that brings comforting, classic flavors directly to the heart of Hardin County. Traveling to various local spots, it serves as a beloved culinary beacon—delighting residents with thoughtfully crafted meals made to feel like home.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-amber-900">Fresh</h3>
                  <p className="text-sm text-gray-600">Daily sourced ingredients</p>
                </div>
                <div className="p-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ChefHat className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-amber-900">Crafted</h3>
                  <p className="text-sm text-gray-600">Made with expertise</p>
                </div>
                <div className="p-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-amber-900">Mobile</h3>
                  <p className="text-sm text-gray-600">Coming to you</p>
                </div>
              </div>
            </motion.div>

            {/* Image content */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <img
                src="/assets/dontray.jpg"
                alt="Fresh ingredients"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
                <h4 className="font-bold text-xl mb-1">10+ Years</h4>
                <p className="text-amber-100">Serving Excellence</p>
              </div>
            </motion.div>
          </div>
         
        </div>
      </section>
      <section className="bg-amber-50 py-24">
        <div className=" mx-auto max-w-3xl text-center bg-white rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            Want Us at Your Event?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We'd love to bring our mobile kitchen to you! Contact us to discuss catering options for your next gathering.
          </p>
          <div className="container-md flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}