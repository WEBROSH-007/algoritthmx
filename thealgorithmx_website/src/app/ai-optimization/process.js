import React from 'react';
import { Montserrat } from "next/font/google";
import styles from "../graphics/styles.module.css";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const AIOptimizationProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Assessment and Analysis",
      description: "Our journey begins with a thorough assessment of your current technology infrastructure. We analyze your existing systems, processes, and IT landscape to identify areas that require improvement. The review includes an evaluation of performance bottlenecks, security vulnerabilities, and scalability limitations."
    },
    {
      number: 2,
      title: "Strategic Planning",
      description: "We develop a strategic plan tailored to your business goals based on the assessment findings. We collaborate closely with your team to align the re-engineering process with your specific needs and objectives."
    },
    {
      number: 3,
      title: "Design and Blueprinting",
      description: "Once we have a good plan, we start designing the new tech setup. Our experts make detailed drawings and plans, showing how everything will work. This ensures our new system matches your long-term goals and can change as your business grows."
    },
    {
      number: 4,
      title: "Development and Implementation",
      description: "Once the design is approved, our development team takes over. We employ agile development methodologies to build and implement the new architecture iteratively. This approach allows continuous feedback and adjustments to ensure the re-engineered system aligns with evolving business needs."
    },
    {
        number: 5,
        title: "Data Migration and Integration",
        description: "We carefully plan and execute data migration from your legacy systems to the new architecture. Our team ensures a seamless transition, minimizing downtime and data loss. We also focus on integrating the re-engineered system with your existing software and processes to maintain workflow continuity."
    },
    {
        number: 6,
        title: "Testing and Quality Assurance",
        description: "Rigorous testing is an integral part of our process. We conduct various tests, including performance testing, security testing, and user acceptance testing, to ensure that the re-engineered system meets all functional and non-functional requirements. Quality assurance is paramount to guarantee a reliable and robust solution."
    },
    {
        number: 7,
        title: "Deployment and Training",
        description: "After successful testing, we deploy the re-engineered architecture into your production environment. We provide training and support to your team to ensure a smooth transition and optimal utilization of the new system. Copper Digital is committed to ensuring your team is well-prepared to leverage the enhanced technology."
    },
    {
        number: 8,
        title: "Ongoing Monitoring and Optimization",
        description: "Our engagement doesn't end with deployment. We continuously monitor the performance and security of your re-engineered architecture. Proactive maintenance and optimization efforts are ongoing to address emerging issues, ensure scalability, and maximize system efficiency."
    },
    {
        number: 9,
        title: "Documentation and Knowledge Transfer",
        description: "We maintain detailed documentation of the re-engineered architecture and processes throughout the process. We provide comprehensive documentation and conduct knowledge transfer sessions to empower your team to effectively manage and maintain the system."
    },
    {
        number: 10,
        title: "Post-Implementation Support",
        description: "We offer post-implementation support and maintenance services to address any issues, implement updates, and ensure the long-term success of your re-engineered architecture."
    },
  ];

  return (
    <div className="min-h-screen h-full bg-black text-gray-300 p-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className={`${styles["main-text"]} ${monsterfont1.className} `}>Our Comprehensive Approach</h1>
          <h2 className={`${styles["main-text"]} ${monsterfont.className}  text-white `}>
        To Architecture Re-engineering


          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-yellow-500"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative pl-16 pb-16">
              {/* Timeline dot */}
              <div className="absolute left-0 w-8 h-8 bg-white  rounded-full flex items-center justify-center">
                <span className={`font-helveticaneue text-black`}>{step.number}</span>
              </div>
              
              {/* Content */}
              <div>
                <h3 className= {`${monsterfont.className} ${styles["sub-title"]}`}>{step.title}</h3>
                <p className={`${styles["sub-description"]} font-helveticaneue text-semi-white`}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIOptimizationProcess;
