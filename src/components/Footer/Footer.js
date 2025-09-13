
import Link from 'next/link';
import LogoComponent from '../LogoComponent/LogoComponent';
import { 
  indianFoodTechEmail, indianFoodTechAddress1, indianFoodTechAddress2, indianFoodTechAddress3, indianFoodTechPhone } from '../../Utils/CommonConst';

const navLinks = [
  { id: 1, title: 'About Us', path: "/aboutUs" },
  { id: 2, title: 'Products', path: "/products" },
  { id: 3, title: 'Certificate', path: "/certificate" },
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

        <div className="border-t border-amber-200 mt-8 pt-6 text-center">
          &copy; {new Date().getFullYear()} Indian Foodtech. All Rights Reserved (Terms of Use)
          <br />
          Developed and Managed by Infinus Tech
        </div>
      </div>
    </footer>
  );
}