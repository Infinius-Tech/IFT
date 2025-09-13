"use client";

import { CheckCircle, Factory, Package, Globe, Calendar } from 'lucide-react';

export default function BrandedPeanutButter() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-4">
                START YOUR BRANDED PEANUT BUTTER
              </h1>
              <p className="text-lg text-[#654321] mb-6">
                We are Pioneer in Peanut Butter manufacturing in India. We are manufacturing premium quality Peanut Butter using rich quality peanuts which is great in taste & highly nutritious.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-[#6B8E23] mb-4 flex items-center">
                <span>GET IN TOUCH</span>
                <div className="ml-4 h-1 flex-grow bg-amber-500 rounded-full"></div>
              </h2>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <Package className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#8B4513]">All Packaging Sizes Available in Pet Jar</h3>
                    <p className="text-[#654321] mt-2">We are pioneer in private labelling.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#8B4513]">2 Years Of Shelf Life From The Production Date</h3>
                    <p className="text-[#654321] mt-2">Contact Us & Make Your Own Peanut Butter Brand.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Factory className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#8B4513]">In-House Pet Jar Manufacturing Facility</h3>
                    <p className="text-[#654321] mt-2">Make from us, sale anywhere around the world.</p>
                  </div>
                </div>
              </div>

              {/* <button className="mt-8 w-full bg-[#8B4513] hover:bg-[#6B8E23] text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-300 flex items-center justify-center">
                <Globe className="w-5 h-5 mr-2" />
                Start Your Global Brand Today
              </button> */}
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="relative z-1 bg-white p-8 rounded-2xl shadow-lg border-2 border-amber-200">
              <div className="aspect-w-1 aspect-h-1 bg-gradient-to-r from-amber-200 to-amber-300 rounded-xl overflow-hidden h-64 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-24 h-24 bg-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Package className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#8B4513]">Private Labeling</h3>
                  <p className="text-[#654321] mt-2">Your Brand, Our Quality</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-amber-100 p-4 rounded-lg text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-[#8B4513]">Premium Quality</p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg text-center">
                  <Globe className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-[#8B4513]">Worldwide Export</p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg text-center">
                  <Factory className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-[#8B4513]">In-House Production</p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg text-center">
                  <Calendar className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-[#8B4513]">2 Year Shelf Life</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-4 w-24 h-24 bg-amber-300 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-400 rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}