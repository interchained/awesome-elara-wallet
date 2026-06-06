/* ============================================================
   Elara — App composition
   ============================================================ */
function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Manifesto />
      <WhatElara />
      <FeatureMatrix />
      <Security />
      <ArchitectureSection />
      <BtcSection />
      <Roadmap />
      <Ecosystem />
      <OpenSource />
      <CTASection />
      <Closer />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
