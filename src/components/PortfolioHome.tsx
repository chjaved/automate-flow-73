"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "BrightFuture Academy",
    description:
      "An educational website showcasing academic excellence, campus life, and admissions for BrightFuture Academy — inspiring minds and building futures since 1995.",
    image: "/assets/brightfuture.jpg",
    url: "https://preview--brightfuture-pathways.lovable.app/",
  },
  {
    title: "CalcVerse",
    description:
      "Your all-in-one intelligent calculator suite with 200+ tools for finance, math, health, and AI-powered calculations — delivering instant, accurate results.",
    image: "/assets/calcverse.jpg",
    url: "https://preview--intelligent-calculator-suite.lovable.app/",
  },
  {
    title: "PrimeLiving Real Estate",
    description:
      "A modern real estate platform helping users buy, sell, or rent premium properties with expert guidance and elegant design.",
    image: "/assets/primeliving.jpg",
    url: "https://preview--prime-digs-pro.lovable.app/",
  },
  {
    title: "VitalCare Health & Wellness",
    description:
      "A trusted healthcare platform offering comprehensive medical services, expert doctors, and 24/7 patient care with compassion and excellence.",
    image: "/assets/vitalcare.jpg",
    url: "https://preview--nurture-book-now.lovable.app/",
  },
  {
    title: "WanderLux Travel & Tours",
    description:
      "A luxury travel website curating personalized journeys, cultural tours, and bespoke vacation experiences around the world.",
    image: "/assets/wanderlux.jpg",
    url: "https://preview--wanderlux-dream-weaver.lovable.app/",
  },
  {
    title: "DocuSuite",
    description:
      "A powerful online document platform with 20+ tools to convert, merge, compress, edit, and secure your files — fast, private, and free.",
    image: "/assets/docusuite.jpg",
    url: "https://preview--paper-wizard-hub.lovable.app/",
  },
  {
    title: "Global Tours & Umrah Services",
    description:
      "Providing trusted, seamless Umrah and Hajj experiences since 2007 — from documentation to five-star pilgrim services worldwide.",
    image: "/assets/umrah.jpg",
    url: "https://globaltoursandumrah.com/",
  },
  {
    title: "Sydney LuxeRide",
    description:
      "Premium private chauffeur services across Sydney offering luxury transfers, corporate rides, and personalized travel experiences.",
    image: "/assets/sydneyluxeride.jpg",
    url: "https://sydneyluxeride.com.au/",
  },
  {
    title: "Skyline Properties",
    description:
      "A professional property investment and management website designed for modern investors seeking premium real estate opportunities.",
    image: "/assets/skyline.jpg",
    url: "https://preview--skyline-props.lovable.app/",
  },
  {
    title: "EduTech Learning Hub",
    description:
      "An online platform for modern learners, offering interactive courses, quizzes, and progress tracking for personal growth.",
    image: "/assets/edutech.jpg",
    url: "https://preview--learning-link-hub.lovable.app/",
  },
  {
    title: "ZenSpace Interiors",
    description:
      "Interior design agency website featuring aesthetic layouts, service showcases, and project portfolios for modern living spaces.",
    image: "/assets/zenspace.jpg",
    url: "https://preview--interior-zenflow.lovable.app/",
  },
  {
    title: "AutoSphere Motors",
    description:
      "A responsive car dealership website showcasing premium vehicles, finance options, and booking systems for test drives.",
    image: "/assets/autosphere.jpg",
    url: "https://preview--drive-haven-pro.lovable.app/",
  },
];

const PortfolioHome = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  const displayedProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <section id="portfolio" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our latest work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore how we transform ideas into beautiful, high-performing
            websites that drive results.
          </p>
        </div>

        {/* Grid of 3 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProjects.map((project, index) => (
            <Card
              key={index}
              className="hover-lift overflow-hidden group border-border bg-card"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="h-8"
          >
            Previous
          </Button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === index
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className="h-8"
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHome;
