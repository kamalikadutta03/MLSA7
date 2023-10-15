/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Is Data Science overrated?",
    description:
      "A blog post on the hype around data science and how it is not as glamorous as it seems.",
    url: "https://medium.com/@2104025/is-data-science-overrated-3b09f8e4d5de",
  },
  {
    title: "Usage of Power BI for Data Analytics",
    description:
      "A blog post on the usage of Power BI for data analytics and how it is a great tool for data visualization.",
    url: "https://medium.com/@2104025/usage-of-power-bi-for-data-analytics-6fd96595d5f3",
  },
  {
    title: "Technology and Teens",
    description:
      "A blog post on the usage of technology by teens and how it is affecting their mental health.",
    url: "https://medium.com/@2104025/technology-and-teens-58aca6767095",
  },
  {
    title: "The Pandemic-is it really over?",
    description:
      "A blog post on the effects of the pandemic on the mental health of people.",
    url: "https://medium.com/@2104025/the-pandemic-is-it-really-over-a1a229d28906",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
