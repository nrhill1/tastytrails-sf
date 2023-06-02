// ./components/Header/index.tsx

import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header"), {
    ssr: true,
})

export default Header;