import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Slider from "@/components/atoms/Slider";
import Label from "@/components/atoms/Label";
import CharacterCounter from "@/components/molecules/CharacterCounter";
import CopyButton from "@/components/molecules/CopyButton";
import ApperIcon from "@/components/ApperIcon";
import Loading from "@/components/ui/Loading";

const GeneratorTool = () => {
  const [input, setInput] = useState("Best React development services for modern web applications. Expert React developers creating scalable, fast, and user-friendly applications with cutting-edge technology.");
  const [output, setOutput] = useState("");
  const [characterLimit, setCharacterLimit] = useState(160);
  const [isGenerating, setIsGenerating] = useState(false);

  const samplePrefixes = [
    "Discover",
    "Learn about",
    "Expert guide to",
    "Professional",
    "Top-rated",
    "Premium",
    "Complete guide to",
    "Master",
    "Advanced",
    "Ultimate"
  ];

  const sampleSuffixes = [
    "Get started today!",
    "Learn more now.",
    "Try it free.",
    "Contact us today.",
    "Start your journey.",
    "Join thousands of users.",
    "Get expert help.",
    "See results fast.",
    "Transform your business.",
    "Book consultation now."
  ];

  const generateMetaDescription = async () => {
    if (!input.trim()) {
      toast.error("Please enter some content first!");
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      const prefix = samplePrefixes[Math.floor(Math.random() * samplePrefixes.length)];
      const suffix = sampleSuffixes[Math.floor(Math.random() * sampleSuffixes.length)];
      
      // Calculate available space for content
      const prefixLength = prefix.length + 1; // +1 for space
      const suffixLength = suffix.length + 1; // +1 for space
      const availableSpace = characterLimit - prefixLength - suffixLength;
      
      // Truncate input to fit within character limit
      let processedInput = input.trim();
      if (processedInput.length > availableSpace) {
        processedInput = processedInput.substring(0, availableSpace - 3) + "...";
      }
      
      const generatedDescription = `${prefix} ${processedInput} ${suffix}`;
      setOutput(generatedDescription);
      toast.success("Meta description generated successfully!");
    } catch (error) {
      toast.error("Failed to generate meta description");
    } finally {
      setIsGenerating(false);
    }
  };

  const resetForm = () => {
    setInput("");
    setOutput("");
    setCharacterLimit(160);
    toast.info("Form reset successfully");
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <section className="py-16 px-4" id="generator">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-2xl" />
            
            <div className="relative">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Generate Your Meta Description
                </h2>
                <p className="text-gray-600">
                  Enter your content and let AI create the perfect meta description
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      Content or Keywords
                    </Label>
                    <textarea
                      value={input}
                      onChange={handleInputChange}
                      placeholder="Enter your webpage content, keywords, or topic description here..."
                      className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                      rows={6}
                    />
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      Character Limit: {characterLimit}
                    </Label>
                    <div className="space-y-2">
                      <Slider
                        value={characterLimit}
                        onChange={(e) => setCharacterLimit(parseInt(e.target.value))}
                        min={50}
                        max={320}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>50</span>
                        <span>160 (recommended)</span>
                        <span>320</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={generateMetaDescription}
                      loading={isGenerating}
                      disabled={!input.trim()}
                      className="flex-1"
                      size="lg"
                    >
                      <ApperIcon name="Zap" size={20} />
                      Generate
                    </Button>
                    <Button
                      onClick={resetForm}
                      variant="outline"
                      size="lg"
                    >
                      <ApperIcon name="RotateCcw" size={20} />
                      Reset
                    </Button>
                  </div>
                </div>

                {/* Output Section */}
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      Generated Meta Description
                    </Label>
                    <div className="relative">
                      <textarea
                        value={output}
                        readOnly
                        placeholder="Your generated meta description will appear here..."
                        className="w-full h-32 p-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none resize-none"
                        rows={6}
                      />
                      <AnimatePresence>
                        {isGenerating && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center"
                          >
                            <Loading message="Generating..." />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      Character Count
                    </Label>
                    <CharacterCounter count={output.length} limit={characterLimit} />
                  </div>

                  <div className="flex justify-end">
                    <CopyButton 
                      text={output}
                      size="lg"
                      className="min-w-32"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default GeneratorTool;