// ./components/Header/index.tsx

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"), {
    ssr: true,
})

export default Navbar;