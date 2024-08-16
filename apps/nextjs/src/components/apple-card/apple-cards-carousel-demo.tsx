"use client";
import Image from "next/image";
import React from "react";
import { Card, Carousel } from "./apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Features.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const Content = ({bigtext,keyBenefits}:any) => {
  return (
    <>
          <div
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {bigtext}
              <ul className="list-disc	text-neutral-300 list-inside	mt-16">
          {keyBenefits.map((benefit:any, index:any) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
            </p>
          </div>
    </>
  );
};
const data = [
  {
    category: "Website Analysis & Consultancy",
    title: "Maximise Your Website's Potential",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        bigtext="Tipflow starts by offering a comprehensive, free analysis of your website. Our expert consultancy identifies key areas to improve lead generation and boost your revenue. With actionable insights tailored to your business, you’ll be on your way to optimising your online presence."
        keyBenefits={[
          "In-depth SEO and performance audits",
          "Customized strategies to increase lead generation",
          "Actionable insights to enhance user engagement",
        ]}
        imageSrc="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    category: "SEO Optimization & Page Ranking",
    title: "Drive More Organic Traffic",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        bigtext="Tipflow offers a robust SEO optimization service that significantly improves your website’s visibility. By using advanced algorithms and AI-driven insights, we enhance your site’s content, structure, and keywords, ensuring it attracts more organic traffic and generates quality leads."
        keyBenefits={[
          "Comprehensive keyword optimization",
          "On-page and off-page SEO improvements",
          "Continuous performance tracking",
        ]}
        imageSrc="https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    category: "Click-Through Analytics & User Behavior Insights",
    title: "Understand and Engage Your Audience",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        bigtext="Tipflow provides you with advanced analytics to track user behavior on your site. Our tools offer click-through analytics, heat maps, and user insights, enabling you to understand how visitors interact with your site. Based on this data, we create targeted pop-ups to engage visitors and convert them into leads."
        keyBenefits={[
          "Detailed heat maps and session recordings",
          "Actionable insights into user behavior",
          "Smart, data-driven pop-ups to increase conversions",
        ]}
        imageSrc="https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    category: "Personalised Chatbots Powered by GEMINI LLM",
    title: "Engage Visitors with AI",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        bigtext="Our personalised chatbots, powered by GEMINI LLM, are designed to interact with your site visitors in a meaningful way. These AI-driven bots use your company’s data to provide accurate, helpful responses, helping you capture leads and keep visitors engaged."
        keyBenefits={[
          "Automated, real-time customer support",
          "Intelligent, personalised interactions",
          "Seamless integration with your business data",
        ]}
        imageSrc="https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    category: "AI-Driven LinkedIn Prospecting",
    title: "Find and Convert High-Quality Leads",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        bigtext="Tipflow harnesses the power of AI to scrape LinkedIn and identify potential leads that are most likely to convert. This automated process saves you time and ensures a steady stream of high-quality prospects for your sales team to engage with."
        keyBenefits={[
          "Automated prospecting on LinkedIn",
          "High-quality lead generation",
          "Easy integration with CRM systems",
        ]}
        imageSrc="https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    category: "Email Automation & Meeting Scheduling",
    title: "Nurture Leads and Convert Prospects",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        bigtext="Automate your email marketing and follow-up processes with Tipflow. Our platform handles everything from sending initial outreach emails to scheduling meetings and integrating them into your calendar. Powered by GEMINI LLM, Tipflow ensures timely, personalised communication that nurtures leads and drives conversions."
        keyBenefits={[
          "Automated, personalised email sequences",
          "Smart scheduling and calendar integration",
          "Enhanced prospect engagement and conversion rates",
        ]}
        imageSrc="https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    category: "CRM Integration",
    title: "Centralise Your Lead Management",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        bigtext="Tipflow seamlessly integrates with popular CRM systems, keeping all your customer data, interactions, and insights centralised and easily accessible. This ensures that your sales team has all the information they need to close deals and build lasting relationships."
       

 keyBenefits={[
          "Easy integration with top CRM platforms",
          "Centralised data and insights",
          "Improved lead tracking and conversion",
        ]}
        imageSrc="https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
];