import Link from 'next/link';
import LogoComponent from '../LogoComponent/LogoComponent';
import { 
  indianFoodTechEmail, indianFoodTechAddress1, indianFoodTechAddress2, indianFoodTechAddress3, indianFoodTechPhone } from '../../Utils/CommonConst';

const navLinks = [
  { id: 1, title: 'About Us', path: "/aboutUs" },
  { id: 2, title: 'Products', path: "/products" },
  { id: 3, title: 'Private Label', path: "/private-label" },
  // { id: 4, title: 'Certificate', path: "/certificate" },
  { id: 4, title: 'Contact Us', path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#8B4513] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center mb-4">
              <LogoComponent textColor="text-white" />
            </Link>
            <p className="max-w-xs">Premium organic peanut butter for businesses seeking quality ingredients.</p>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.id}>
                  <Link
                    href={link.path}
                    className="hover:text-amber-200 transition"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="mb-2">
              <p>{indianFoodTechAddress1}</p>
              <p>{indianFoodTechAddress2}</p>
              <p>{indianFoodTechAddress3}</p>
            </div>
            <p className="mb-2">Email: {indianFoodTechEmail}</p>
            <p>Phone: {indianFoodTechPhone}</p>
          </div>
        </div>

          <div className="flex justify-between">
            <div className="flex space-x-2">
              <a href="https://www.facebook.com/p/Indian-foodtech-100083285323445/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                </svg>
              </a>
              <a href="https://in.linkedin.com/in/indian-foodtech-b5633829a" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

        <div className="border-t border-amber-200 mt-8 pt-6 text-center">
          &copy; {new Date().getFullYear()} Indian Foodtech. All Rights Reserved (Terms of Use)
          <br />
          Developed and Managed by Infinus Tech
        </div>
      </div>   
    </footer>
  );
}