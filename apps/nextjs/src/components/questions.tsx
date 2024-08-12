import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saasfly/ui/accordion";

export function Questions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>About Tipflow</AccordionTrigger>
        <AccordionContent>
        Tipflow is a cutting-edge SaaS platform designed to revolutionize how businesses generate leads and engage with their customers. Powered by advanced AI technologies, including the GEMINI LLM, Tipflow offers a comprehensive suite of tools that streamline digital marketing efforts, optimize website performance, and automate key sales processes. From personalized chatbots to in-depth analytics and SEO optimization, Tipflow empowers businesses to convert prospects into loyal clients, drive revenue growth, and deliver exceptional customer experiences. Whether you’re a startup or an established enterprise, Tipflow provides the solutions you need to stay ahead in today’s competitive landscape.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why Choose Us?</AccordionTrigger>
        <AccordionContent>
        Choosing Tipflow means partnering with a platform that’s dedicated to driving your business success. Our AI-powered tools are designed to maximize your lead generation, optimize your online presence, and automate critical sales processes, all while delivering a personalized experience for your customers. We offer tailored solutions that adapt to your unique business needs, ensuring you stay ahead of the competition. With our commitment to innovation, exceptional support, and proven results, Tipflow not only helps you achieve your goals but exceeds your expectations. Experience growth, efficiency, and customer satisfaction like never before with Tipflow.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How Can We Help You?</AccordionTrigger>
        <AccordionContent>
        At Tipflow, our mission is to empower your business with the tools and insights needed to thrive in the digital age. We offer a comprehensive suite of AI-driven solutions designed to help you attract, engage, and convert more leads, ultimately boosting your sales and revenue. Our platform optimizes your online presence by enhancing SEO performance, providing in-depth user behavior analytics, and implementing personalized engagement strategies like chatbots and smart pop-ups. But we don't stop there. Tipflow also simplifies your sales processes through automation, from managing email campaigns to scheduling meetings, ensuring your team can focus on what they do best—closing deals and nurturing client relationships. With seamless CRM integration and advanced reporting, you’ll have all the data you need to make informed decisions and refine your strategy. We tailor our approach to meet your unique business goals, providing ongoing support and consultation to ensure you’re not just keeping up with the competition but staying ahead. Whether you're a startup looking to scale or an established enterprise aiming to optimize, Tipflow provides the expertise and innovation you need to drive sustained growth and customer satisfaction. Let us help you transform your workflows, enhance your customer interactions, and achieve measurable success.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
