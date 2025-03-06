import React, { useState } from 'react';
import { BookOpen, User, Clock, X, ArrowRight } from 'lucide-react';

const blogs = [
  {
    icon: <BookOpen />,
    name: 'Business Insights',
    fullTitle: 'Innovative Strategies in Modern Business',
    author: 'Jane Doe',
    date: 'March 15, 2024',
    readTime: '5 min read',
    excerpt: 'Explore groundbreaking approaches that are reshaping the business landscape and driving innovation.',
    fullContent: `In today's rapidly evolving business environment, innovation is not just a buzzword—it's a survival strategy. Companies that embrace creative problem-solving and adaptive thinking are the ones that truly stand out.

This comprehensive exploration delves deep into the methodologies that successful businesses are using to stay ahead of the curve. From design thinking to agile methodologies, we'll uncover how top organizations are reimagining their approach to challenges, breaking down traditional barriers, and creating value in unprecedented ways.

Key insights include:
- The role of adaptive thinking in modern business
- Case studies of innovative companies
- Practical strategies for fostering a culture of innovation
- Emerging trends that are reshaping industries`
  },
  {
    icon: <User />,
    name: 'Technology Trends',
    fullTitle: 'The Future of Technology and AI',
    author: 'John Smith',
    date: 'February 28, 2024',
    readTime: '7 min read',
    excerpt: 'Uncover the transformative potential of artificial intelligence and its impact on various industries.',
    fullContent: `Artificial Intelligence is no longer a distant dream—it's a present reality reshaping every aspect of our lives. From healthcare to finance, AI is driving unprecedented changes, offering solutions that were once thought impossible.

This in-depth analysis examines how AI is not just a technological advancement, but a fundamental shift in how we approach problem-solving, decision-making, and innovation across multiple sectors.

Highlights include:
- AI's impact across different industries
- Ethical considerations in AI development
- Emerging AI technologies
- Future predictions and potential challenges`
  },
  {
    icon: <Clock />,
    name: 'Sustainability Insights',
    fullTitle: 'Sustainable Development in the Digital Age',
    author: 'Emily Chang',
    date: 'January 20, 2024',
    readTime: '6 min read',
    excerpt: 'Discover how digital technologies are driving sustainable solutions and environmental innovation.',
    fullContent: `The intersection of digital technology and sustainability represents one of the most promising frontiers of modern innovation. As we face global challenges like climate change, technology offers unprecedented tools for creating meaningful, sustainable solutions.

This article explores how cutting-edge technologies are being leveraged to address environmental challenges, from smart energy systems to AI-driven conservation efforts.

Key discussions include:
- Technological innovations in sustainability
- Digital solutions for environmental challenges
- The role of AI in conservation
- Future of sustainable technology`
  }
];

const ImprovedBlog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Blog Insights</h1>
        <div className="w-20 h-1 bg-blue-500 mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {React.cloneElement(blog.icon, { 
                      size: 24, 
                      className: "text-blue-600" 
                    })}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{blog.name}</h2>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{blog.fullTitle}</h3>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User size={14} className="mr-1" />
                  <span className="mr-3">{blog.author}</span>
                  <Clock size={14} className="mr-1" />
                  <span>{blog.date}</span>
                </div>
                
                <p className="text-gray-600 mb-6 h-20 overflow-hidden">{blog.excerpt}</p>
                
                <div className="flex justify-end">
                  <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedBlog && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedBlog(null)}
          >
            <div 
              className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="bg-blue-600 h-2 w-full rounded-t-xl"></div>
                <button 
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      {React.cloneElement(selectedBlog.icon, { 
                        size: 24, 
                        className: "text-blue-600" 
                      })}
                    </div>
                    <span className="text-blue-600 font-semibold">{selectedBlog.name}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedBlog.fullTitle}</h2>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                    <User size={14} className="mr-1" />
                    <span className="mr-3">{selectedBlog.author}</span>
                    <Clock size={14} className="mr-1" />
                    <span className="mr-3">{selectedBlog.date}</span>
                    <BookOpen size={14} className="mr-1" />
                    <span>{selectedBlog.readTime}</span>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-gray-700 font-medium mb-6">{selectedBlog.excerpt}</p>
                    <div className="text-gray-700 space-y-4">
                      {selectedBlog.fullContent.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImprovedBlog;