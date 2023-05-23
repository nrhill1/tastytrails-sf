// ./components/Map/index.tsx
'use client';

import dynamic from "next/dynamic";
import loading from "../../app/loading"

const Map = dynamic(() => import("./Map"), {
    ssr: false,
    loading: loading,
})

export default Map;