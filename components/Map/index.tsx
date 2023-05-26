// ./components/Map/index.tsx
'use client';

import dynamic from "next/dynamic";


const Map = dynamic(() => import("./Map"), {
    ssr: false,
})

export default Map;