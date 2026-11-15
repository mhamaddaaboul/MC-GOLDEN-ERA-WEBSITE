import "../styles/Features.css";

const featuresList = [
  {
    title: "Creator Profiles",
    description: "Explore dedicated pages for Ssundee, Sam Gladiator, Aphmau, and Stampy."
  },
  {
    title: "Minecraft Series",
    description: "Discover featured Minecraft series and read short descriptions about them."
  },
  {
    title: "Interactive Video Player",
    description: "Select a series card to change the embedded YouTube video on its creator page."
  },
  {
    title: "Responsive Layout",
    description: "Browse the website on desktop, tablet, or mobile-sized screens."
  },
  {
    title: "Contact Form",
    description: "Use the contact page to write a name, email address, subject, and message."
  }
];

function Features() {
  return (
    <main className="features-page">
      <header className="features-header">
        <p>EXPLORE THE WEBSITE</p>
        <h1>Our Features</h1>
        <span>Everything you can discover on MC Golden Era.</span>
      </header>

      <section className="features-grid">
        {featuresList.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Features;
