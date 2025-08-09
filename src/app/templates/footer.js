'use client'

import {motion} from 'framer-motion'

const Footer = () => {
    return(
        <footer className="bg-amber-900 text-amber-50">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/78706eb61_4246C484-AFB8-4353-BD61-F92A75D806F8.png" 
                  alt="The Right Seasons" 
                  className="h-12 w-12"
                />
                <div>
                  <h3 className="text-xl font-bold">The Right Seasons</h3>
                  <p className="text-amber-200">Mobile Kitchen</p>
                </div>
              </div>
              <p className="text-amber-200 leading-relaxed">
                Fresh, seasonal ingredients crafted into unforgettable meals. 
                Find us around town serving up culinary excellence on wheels.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-amber-200">
                <p>📧 Business email? </p>
                <p>📱 Phone number?</p>
                <p>📍 Serving the greater Hardin County Area</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <p className="text-amber-200 mb-4">
                Stay updated on our locations and daily specials!
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center">
                  <span className="text-sm">📘</span>
                </div>
                <div className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center">
                  <span className="text-sm">📷</span>
                </div>
                <div className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center">
                  <span className="text-sm">🐦</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; {new Date().getFullYear()} The Right Season Mobile Kitchen. All rights reserved.</p>
          </div>
        </div>
        </motion.div>
      </footer>
    )
}

export default Footer