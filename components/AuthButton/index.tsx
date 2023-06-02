// ./components/AuthButton/index.tsx

import dynamic from "next/dynamic";

const AuthButton = dynamic(() => import("./AuthButton"), {
    ssr: true,
})

export default AuthButton;