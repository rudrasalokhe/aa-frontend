import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-black py-20 px-[10%]">
      <h1 className="text-4xl font-bold mb-12 text-white border-l-8 border-yellow-400 pl-4">Contact Us</h1>

      <div className="flex flex-wrap gap-8">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.89592087332!2d72.8319697277345!3d19.14167056419224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1641716772852!5m2!1sen!2sin"
          className="flex-1 min-w-[41rem] h-[45rem]"
          allowFullScreen
          loading="lazy"
        ></iframe>

        <form className="flex-1 min-w-[41rem] bg-white p-8">
          <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
          <input type="text" placeholder="name" className="w-full p-4 mb-4 bg-gray-100" />
          <input type="email" placeholder="email" className="w-full p-4 mb-4 bg-gray-100" />
          <input type="tel" placeholder="phone" className="w-full p-4 mb-4 bg-gray-100" />
          <textarea 
            placeholder="message" 
            className="w-full p-4 mb-4 bg-gray-100 h-40 resize-none"
          ></textarea>
          <button type="submit" className="w-full px-8 py-3 bg-black text-white hover:bg-yellow-400 hover:text-black transition duration-300">
            send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;