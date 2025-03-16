import { Button } from "../components/Button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, List, Clock, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold">TaskMaster</h1>
        <Button variant="outline">Sign In</Button>
      </nav>
      
      {/* Hero Section */}
      <header className="text-center py-20 bg-blue-600 text-white">
        <h2 className="text-4xl font-bold">Stay Organized, Stay Productive</h2>
        <p className="mt-4 text-lg">Manage your tasks efficiently with TaskMaster</p>
        <Button className="mt-6" size="lg">Get Started</Button>
      </header>
      
      {/* Features Section */}
      <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[ 
          { icon: <CheckCircle size={40} className="text-blue-600" />, title: "Easy Task Management", desc: "Create, edit, and organize your tasks effortlessly." },
          { icon: <List size={40} className="text-blue-600" />, title: "Smart Task Lists", desc: "Categorize tasks and track progress easily." },
          { icon: <Clock size={40} className="text-blue-600" />, title: "Reminders & Deadlines", desc: "Never miss an important task with built-in alerts." }
        ].map((feature, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                {feature.icon}
                <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
                <p className="text-gray-600 mt-2 text-center">{feature.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[ 
            { quote: "TaskMaster changed the way I work! Super intuitive and efficient.", name: "John Doe" },
            { quote: "A must-have tool for productivity lovers!", name: "Jane Smith" },
            { quote: "Finally, a task manager that keeps me on track.", name: "Chris Johnson" }
          ].map((testimonial, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Card>
                <CardContent className="p-6 text-center">
                  <Quote size={30} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                  <p className="text-gray-700 font-semibold mt-4">- {testimonial.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA Footer */}
      <footer className="bg-blue-600 text-white text-center py-10 mt-16">
        <h2 className="text-2xl font-bold">Start managing your tasks today!</h2>
        <p className="mt-2">Join thousands of users boosting their productivity.</p>
        <Button className="mt-6" size="lg">Sign Up for Free</Button>
      </footer>
    </div>
  );
}
