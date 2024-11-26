"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="bg-[--blue] text-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Get Mel's Personal Letter
        </h2>
        <p className="text-xl mb-8">
          Almost two million people call this letter "the highlight of my week."
        </p>
        <p className="text-lg mb-8 text-white/80">
          Not just stories and news from me, but tools and tips that will change your life. I keep them packed with deeply valuable topics, hard-hit advice, financial literacy, compelling conversations, and life hacks and inspiration you need to create a better life.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-black text-lg py-6"
              required
            />
            <Button 
              type="submit" 
              size="lg"
              className="bg-[--yellow] hover:bg-[--yellow]/90 text-black font-semibold whitespace-nowrap"
            >
              Sign me up
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}