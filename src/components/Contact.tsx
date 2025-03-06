import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle, 
  AlertTriangle 
} from "lucide-react";
import { useUser } from "@clerk/clerk-react";

const Contact: React.FC = () => {
  const { isSignedIn, user } = useUser();

  const [formData, setFormData] = useState({
    name: isSignedIn ? user?.fullName || "" : "",
    email: isSignedIn ? user?.primaryEmailAddress?.emailAddress || "" : "",
    phone: "",
    message: "",
  });

  const [formState, setFormState] = useState<{
    submitted: boolean;
    error: string | null;
  }>({
    submitted: false,
    error: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormState({ submitted: false, error: null });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isSignedIn) {
      setFormState({ 
        submitted: false, 
        error: "You must be logged in to submit the form." 
      });
      return;
    }

    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      setFormState({ 
        submitted: false, 
        error: "Please fill in all fields." 
      });
      return;
    }

    try {
      const response = await fetch("https://aa-backend-90t9.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormState({ submitted: true, error: null });
        setFormData({ 
          name: isSignedIn ? user?.fullName || "" : "", 
          email: isSignedIn ? user?.primaryEmailAddress?.emailAddress || "" : "", 
          phone: "", 
          message: "" 
        });
        
        // Auto-reset submission state after 3 seconds
        setTimeout(() => setFormState({ submitted: false, error: null }), 3000);
      } else {
        setFormState({ 
          submitted: false, 
          error: data.error || "Something went wrong." 
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setFormState({ 
        submitted: false, 
        error: "Failed to submit. Please try again." 
      });
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="contact" 
      className="bg-gradient-to-br from-indigo-900 to-black py-20 px-4 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-black/50 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h1 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-white 
          border-l-8 border-blue-500 pl-6"
        >
          Contact Us
        </motion.h1>

        {/* Contact Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.89592087332!2d72.8319697277345!3d19.14167056419224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1641716772852!5m2!1sen!2sin"
              className="w-full h-[500px]"
              allowFullScreen
              loading="lazy"
              aria-label="Location on Google Maps"
            ></iframe>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
              <Send className="mr-4 text-blue-500" size={32} />
              Get in Touch
            </h2>

            {/* Login Warning */}
            {!isSignedIn && (
              <div className="bg-yellow-500/20 border border-yellow-500 text-yellow-300 p-4 rounded-lg mb-6 flex items-center">
                <AlertTriangle className="mr-4" />
                You must be logged in to submit this form.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Input Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-3 bg-white/10 text-white rounded-lg border border-white/20 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 
                  disabled:opacity-50"
                  disabled={!isSignedIn}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 bg-white/10 text-white rounded-lg border border-white/20 
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  disabled:opacity-50"
                  disabled={!isSignedIn}
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 bg-white/10 text-white rounded-lg border border-white/20 
                focus:outline-none focus:ring-2 focus:ring-blue-500
                disabled:opacity-50"
                disabled={!isSignedIn}
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 h-40 bg-white/10 text-white rounded-lg border border-white/20 
                focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none
                disabled:opacity-50"
                disabled={!isSignedIn}
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full p-3 rounded-lg transition duration-300 flex items-center justify-center ${
                  isSignedIn
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-gray-500 text-gray-300 cursor-not-allowed"
                }`}
                disabled={!isSignedIn}
              >
                <Send className="mr-2" /> 
                {isSignedIn ? "Send Message" : "Login to Submit"}
              </button>

              {/* Form Status */}
              {formState.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 flex items-center justify-center mt-4"
                >
                  <CheckCircle className="mr-2" /> Message sent successfully!
                </motion.div>
              )}

              {formState.error && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center mt-4"
                >
                  {formState.error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-white"
        >
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 text-center">
            <MapPin size={48} className="mx-auto mb-4 text-blue-500" />
            <h3 className="font-bold text-xl mb-2">Our Location</h3>
            <p>Mumbai, Maharashtra, India</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 text-center">
            <Mail size={48} className="mx-auto mb-4 text-blue-500" />
            <h3 className="font-bold text-xl mb-2">Email Us</h3>
            <p>contact@yourcompany.com</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 text-center">
            <Phone size={48} className="mx-auto mb-4 text-blue-500" />
            <h3 className="font-bold text-xl mb-2">Call Us</h3>
            <p>+91 123 456 7890</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;