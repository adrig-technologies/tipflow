"use client";
import Image from "next/image";
import React from "react";
import { Card, Carousel } from "./apple-cards-carousel";

export function AppleCardsCarouselDemo1() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Future Steps: Expanding Tipflow's Capabilities
      </h2>
      <p className="max-w-7xl pl-4 mx-auto text-base md:text-2xl font-medium mt-10 text-neutral-800 dark:text-neutral-200 font-sans">
      As Tipflow evolves, we will introduce new features to further enhance your lead generation and customer engagement efforts. Here's a glimpse of what's coming next:
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const Content = ({bigtext}:any) => {
  return (
    <>
          <div
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {bigtext}
            </p>
          </div>
    </>
  );
};
const data = [
  {
    category: "Client Success Management (CSM) & Churn Reduction",
    title: "Retain Clients and Reduce Churn",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        bigtext="We’re working on tools to help you maintain strong client relationships and reduce churn. By automating follow-ups, satisfaction surveys, and on-boarding processes, you can ensure your clients stay engaged and satisfied."
        imageSrc="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    category: "Automated Project Workflows",
    title: "Streamline Operations",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        bigtext="Future updates will include automated project management workflows, integrating with tools like Jira and Trello. This will help you optimise internal processes and ensure your team stays on track."
        imageSrc="https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    category: "Automated Marketing Campaigns",
    title: "Effortless Campaign Management",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        bigtext="We're also planning to introduce features for automated marketing campaigns, including both organic and paid advertising. This will allow you to expand your reach and engage your target audience more effectively, all from within Tipflow."
        imageSrc="https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
];