"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div
        className="mx-auto flex w-full flex-col items-center justify-center gap-4 bg-white px-8 py-20 dark:bg-black lg:flex-row
                      xl:px-[220px]  "
      >
        <Card
          name="Prabhu Chandramoulesshwaran"
          role="CEO, DataDrone"
          title="Tipflow has completely changed how we handle our leads. We used to find it hard to keep in touch with potential clients, but Tipflow makes it so easy. Since using it, our sales have gone up by 30%"
          image="/images/avatars/debashisdas.png"
          icon={<TipflowIcon />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          name="Debashis Das"
          role="VP, Apexon"
          title="I sat with Vijay and looked at the Tip Flow's beta, which I definitely want to try. If you’re serious about improving your lead nurturing, I’d say give Tipflow a shot. It seems like a tool that could make a difference in keeping potential clients engaged and boosting your sales."
          image="/images/avatars/3rdone.jpeg"
          icon={<TipflowIcon />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
        </Card>
        <Card 
        name="Moorthy"
        role="CEO, Founder, Vminds Technologies"
        title="We’ve worked with Adrig AI Technologies before for the same lead nurturing System, and their service was really good. They handled everything professionally and made sure we were satisfied. Now, I’m eager to try Tipflow. "
        image="/images/avatars/prabhu.png"
        icon={<TipflowIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  name,
  role,
  title,
  image,
  icon,
  children,
}: {
  name: string;
  role: string;
  title: string;
  image: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative  mx-auto flex h-[30rem] w-full  max-w-sm items-center justify-center border border-black/[0.2] p-4 dark:border-white/[0.2]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 ">
          <div className="mt-4 flex items-center gap-4 absolute inset-0 transition  duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
            <img className="h-10 w-10 rounded-full" src={image} alt="" />
            <div className="font-medium dark:text-white">
              <div>{name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {role}
              </div>
            </div>
          </div>
        {/* <div className="absolute left-[calc(50%-24px)] top-[50%]  w-full h-full transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0
                        ">
          {icon} 
          <img className="h-10 w-10 rounded-full" src={image} alt="" />

        </div> */}
        <h2 className="relative z-10 mt-4 text-xl font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black group-hover/canvas-card:text-white dark:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

const TipflowIcon = () => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 443.5461 402"
      className="h-10 w-10 group-hover/canvas-card:text-white"
    >
      <defs>
        <style>
          {`.cls-1 { fill: #292929; }
              .dark .cls-1 { fill: #ffffff; }`}
        </style>
      </defs>
      <path
        className="cls-1"
        d="M13.2054,.0404h2.92c102.4193,0,204.8387,0,307.258,0,26.5762,0,53.1523,.0148,79.7284-.0403,1.5844-.0033,2.4743,.4961,3.3492,1.7902,11.8786,17.5698,23.8162,35.0997,35.7349,52.6423,.4129,.6077,.781,1.2458,1.3503,2.159-1.0502,0-1.7856,.0005-2.521,0-57.7317-.0445-115.4636-.0176-173.195-.1517-71.6081-.1663-143.2159-.471-214.824-.6749-1.6209-.0046-2.6144-.4636-3.5401-1.8411C37.8636,36.6585,26.1953,19.4374,14.5484,2.2019c-.413-.6112-.7804-1.2531-1.343-2.1616Z"
      />
      <path
        className="cls-1"
        d="M189.2451,221.3315h69.4858v180.6685h-69.4858V221.3315Z"
      />
      <path
        className="cls-1"
        d="M0,81.1378H258.9853v42.7411h-2.56c-74.6707-.0003-149.3413-.0061-224.012,.0357-1.6258,.0009-2.7425-.4416-3.6679-1.7488-6.2478-8.8253-12.5444-17.6161-18.7861-26.4457-2.9619-4.1899-5.8403-8.4387-8.7495-12.6657-.3786-.5501-.7148-1.1294-1.2098-1.9166Z"
      />
      <path
        className="cls-1"
        d="M89.3054,153.3399h169.6771v42.0765c-2.3728,0-4.6412-.011-6.9094,.0016-43.0829,.2386-86.1659,.4691-129.2484,.7595-1.7766,.012-2.9342-.4634-3.9847-1.9195-9.5305-13.2106-19.1244-26.3754-28.6949-39.5572-.2683-.3696-.4826-.7785-.8397-1.361Z"
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
