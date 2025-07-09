import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Target",
      title: "SEO Optimized",
      description: "Generated descriptions follow SEO best practices to improve your search engine rankings and click-through rates.",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: "Ruler",
      title: "Perfect Length",
      description: "Automatically adjusts content to fit within optimal character limits while maintaining message clarity and impact.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: "Layers",
      title: "Multiple Options",
      description: "Generate different variations of meta descriptions to find the perfect match for your content and audience.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Why Choose <span className="gradient-text">MetaMagic</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to help you create compelling meta descriptions that drive traffic and improve search rankings
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-8 h-full text-center group hover:shadow-2xl transition-all duration-300">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <ApperIcon name={feature.icon} size={32} className={feature.color} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <ApperIcon name="Sparkles" size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-gray-800">Ready to Get Started?</h3>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Join thousands of content creators who trust MetaMagic for their SEO needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('generator').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-3 inline-flex items-center gap-2"
            >
              <ApperIcon name="ArrowUp" size={20} />
              Try MetaMagic Now
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;