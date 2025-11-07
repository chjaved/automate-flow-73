import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "10 Business Processes You Should Automate Today",
    excerpt: "Discover the most common business processes that are ripe for automation and how to get started with each one.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    category: "Automation Tips",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Usairam Saleem",
  },
  {
    title: "AI Chatbots: Implementation Guide for 2024",
    excerpt: "A comprehensive guide to implementing AI chatbots that actually improve customer satisfaction and reduce support costs.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    category: "AI & Automation",
    date: "March 10, 2024",
    readTime: "8 min read",
    author: "Mutahir Abbas",
  },
  {
    title: "ROI of Marketing Automation: Real Numbers",
    excerpt: "Data-driven analysis of marketing automation ROI with real examples and benchmarks from successful implementations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Marketing",
    date: "March 5, 2024",
    readTime: "6 min read",
    author: "Mutahir Abbas",
  },
  {
    title: "Web Application Security Best Practices",
    excerpt: "Essential security measures every web application should implement to protect user data and prevent breaches.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    category: "Web Development",
    date: "February 28, 2024",
    readTime: "10 min read",
    author: "Javed Jabbar",
  },
  {
    title: "Choosing the Right Automation Tools for Your Business",
    excerpt: "Navigate the complex landscape of automation tools with our expert guide to selecting the right solutions.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    category: "Strategy",
    date: "February 20, 2024",
    readTime: "7 min read",
    author: "Usairam Saleem",
  },
  {
    title: "API Integration: Common Pitfalls and How to Avoid Them",
    excerpt: "Learn from common API integration mistakes and discover best practices for seamless system connections.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    category: "Technical",
    date: "February 15, 2024",
    readTime: "9 min read",
    author: "Javed Jabbar",
  },
];

const categories = ["All", "Automation Tips", "AI & Automation", "Marketing", "Web Development", "Strategy", "Technical"];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights & <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert insights on automation, AI, web development, and business growth strategies.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-muted">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          <Card className="overflow-hidden hover-lift animate-fade-in">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4">{blogPosts[0].category}</Badge>
                <h3 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Button className="w-fit hover-scale group">
                  Read Article
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card
                key={post.title}
                className="overflow-hidden hover-lift group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {post.author}</span>
                    <Button variant="ghost" size="sm" className="group">
                      Read More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="hover-scale">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get the latest automation insights, tips, and case studies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-foreground h-12 text-lg flex-1"
            />
            <Button size="lg" variant="secondary" className="h-12 px-8 hover-scale">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            No spam. Unsubscribe anytime. Your data is safe with us.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
