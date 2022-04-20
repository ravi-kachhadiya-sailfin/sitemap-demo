import React from "react";
import Routes from './Routes';
import { MetaContext } from "./MetaProvider";
import { Helmet } from "react-helmet";

import './App.css';


function App() {
  const { meta } = React.useContext(MetaContext);

  return (
    <div className="App">
      <Helmet>

        {/* Primary Meta Tags */}
        <title>{meta.title}</title>
        <link rel="canonical" href={meta.url} />
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
      </Helmet>
      <Routes />

    </div>
  );
}

export default App;
