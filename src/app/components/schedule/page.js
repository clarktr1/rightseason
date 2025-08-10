"use client";

import { MapPin, Clock, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ScheduleComponent({ events }) {
  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-amber-900 mb-6">Find Us</h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Follow our mobile kitchen around town! Check out our schedule to see
            where we'll be serving up fresh, delicious meals next.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-calendar w-8 h-8 text-amber-600"
          >
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width={18} height={18} x={3} y={4} rx={2}></rect>
            <path d="M3 10h18"></path>
          </svg>
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-amber-900"
          >
            Upcoming Events
          </motion.h2>
          <div className="inline-flex items-center rounded-full border font-semibold bg-amber-50 text-amber-700 border-amber-200 text-lg px-4 py-1">
            {events?.length} event{events?.length !== 1 && "s"}
          </div>
        </motion.div>

        {events?.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl shadow-lg">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar w-12 h-12 text-amber-500"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                <path d="M3 10h18"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-amber-900 mb-2">
              Schedule Coming Soon!
            </h3>
            <p className="text-amber-700 max-w-md mx-auto">
              We&apos;re planning our next delicious stops. Check back soon or
              call us for updates!
            </p>
          </div>
        ) : (
          <ul className="space-y-8">
            {events?.map(
              ({ id, name, address, time, dateNumber, dateMonth }) => (
                <motion.li
                  key={id}
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <div className="max-w-md bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white rounded-3xl mx-auto">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 text-left">
                        <h3 className="text-xl font-bold mb-2">{name}</h3>
                        <p className="text-amber-100 font-bold flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4" />
                          {address}
                        </p>
                        <p className="text-amber-100 font-bold flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {time}
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <div className="text-2xl font-bold">{dateNumber}</div>
                          <div className="text-sm font-bold text-amber-100">
                            {dateMonth}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.li>
              )
            )}
          </ul>
        )}
      </section>

      <section className="bg-amber-50 py-12">
        <div className="mx-auto max-w-3xl text-center mt-20 bg-white rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            Want Us at Your Event?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We'd love to bring our mobile kitchen to you! Contact us to discuss
            catering options for your next gathering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
