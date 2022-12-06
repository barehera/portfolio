import React from "react";
import ProjectCard from "./ProjectCard";

import sportHouse from "../../assets/projects/sporthouse.png";
import cyppassLanding from "../../assets/projects/cyppass-landing.png";
import cyppassDashboard from "../../assets/projects/cyppass-dashboard.png";
import cyppassValidator from "../../assets/projects/cyppass-validator.png";
import azizler from "../../assets/projects/azizler.png";
import gorilla from "../../assets/projects/gorilla.png";

const index = () => {
  return (
    <section className=" px-6 lg:px-24 py-6 lg:py-12 h-full overflow-auto scrollbar-thin scrollbar-track-primary-light-blue scrollbar-thumb-primary-dark-blue">
      <header className="w-full flex flex-col gap-1 items-center justify-center mb-12 mt-6">
        <h1 className="text-secondary-green font-bold text-xl lg:text-3xl">
          PROJECTS
        </h1>
        <p className="text-secondary-gray text-base lg:text-lg">
          // Selected projects I've worked on in the past.
        </p>
      </header>
      <div className="flex flex-col md:grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
        <ProjectCard
          image={sportHouse}
          title="SportHouse"
          description="SportHouse is the name of the gym management software. Admin can see the entrance and
          leave timings, the remaining membership, and the physical details for each member. Members
          may also obtain information about their memberships, their physical measures, and the gym's
          occupancy rate online. Each member must scan a unique QR code to enter the gym."
          skills={["JavaScript", "TypeScript", "Next.js", "React.js"]}
        />

        <ProjectCard
          image={azizler}
          title="Azizler"
          description="Azizler is a recycling management software. It keeps track of the scrap you buy. Additionally, it
          contains a page for accounting where you may keep track of your earnings and outgoings. You
          may view your debtors on the credit page. The analytics tab allows you to view all sales,
          purchases, revenue, and costs"
          skills={["JavaScript", "TypeScript", "Next.js", "React.js"]}
        />
        <ProjectCard
          image={gorilla}
          title="Gorilla POS"
          description="You can handle and monitor online food orders with the help of Gorilla POS software. In all,
          there are seven screens on it: add new orders, all orders, kitchen panel, courier panel, customer
          directory, products, and analytics."
          skills={["JavaScript", "TypeScript", "Next.js", "React.js"]}
        />
        <ProjectCard
          image={cyppassLanding}
          title="CypPass Landing Page"
          description="Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past."
          skills={["JavaScript", "TypeScript", "Next.js", "React.js"]}
        />
        <ProjectCard
          image={cyppassDashboard}
          title="CypPass Dashboard"
          description="Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past."
          skills={["JavaScript", "TypeScript", "Next.js", "React.js"]}
        />
        <ProjectCard
          image={cyppassValidator}
          title="CypPass Validator"
          description="Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past."
          skills={["JavaScript", "TypeScript", "Next.js", "React.js"]}
        />
      </div>
    </section>
  );
};

export default index;
