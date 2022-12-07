import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";

export default function HomePage() {
  return (
    <div className={`bg-gradient-to-b from-[#5798C01A] to-[#ffffff] min-h-screen`}>
      <Header />
      <Section />
    </div>
  );
}
