"use client";
function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">

                {/* About Us */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About CodeLab</h2>
                    <p className="mb-4">
                        CodeLab is a hands-on learning platform for AI, Data Science, and Web Development.
                        Learn from industry experts, build real-world projects, and accelerate your career in tech.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="hover:text-teal-400 transition-colors duration-300">Home</a>
                        </li>
                        <li>
                            <a href="/courses" className="hover:text-teal-400 transition-colors duration-300">Courses</a>
                        </li>
                        <li>
                            <a href="/webinars" className="hover:text-teal-400 transition-colors duration-300">Webinars</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-teal-400 transition-colors duration-300">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-teal-400 transition-colors duration-300">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex flex-wrap lg:flex-col gap-4">
                        <a href="#" className="hover:text-teal-400 transition-colors duration-300">Facebook</a>
                        <a href="#" className="hover:text-teal-400 transition-colors duration-300">Twitter</a>
                        <a href="#" className="hover:text-teal-400 transition-colors duration-300">LinkedIn</a>
                        <a href="#" className="hover:text-teal-400 transition-colors duration-300">Instagram</a>
                    </div>
                </div>

                {/* Contact */}
                <div className="break-words">
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p>Karachi, Pakistan</p>
                    <p>codeLab HQ</p>
                    <p>Email: info@codelab.com</p>
                    <p>Phone: +92 300 1234567</p>
                </div>

            </div>

            <p className="text-center text-xs pt-8 text-gray-500">
                © 2025 CodeLab. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
