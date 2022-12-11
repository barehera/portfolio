import Link from "next/link";
import React, { useEffect, useState } from "react";
import InfoSection from "./InfoSection";

import SkillsSection from "./SkillsSection";

const index = () => {
  return (
    <section className=" px-6  lg:px-24 grid lg:grid-cols-12 items-center lg:gap-12">
      <InfoSection />
      <SkillsSection />
    </section>
  );
};

export default index;
