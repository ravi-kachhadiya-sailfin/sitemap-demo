import React, { useState } from 'react';
export const MetaContext = React.createContext();

const MetaContextProvider = (props) => {
    const [meta, setMeta] = useState({
        title: "Sitemap",
        description: "Sitemap seo testing",
        url: window.location.href
    });

    return <MetaContext.Provider value={{ meta: meta, setMeta: setMeta }}>
        {props.children}
    </MetaContext.Provider>
}

export default MetaContextProvider;