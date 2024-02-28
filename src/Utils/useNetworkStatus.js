import { useEffect, useState } from "react";

const useNetworkStatus = () => {
    const [networkStatus, setnetworkStatus] = useState(true);
    useEffect(() =>{
        window.addEventListener("online", () => {
            setnetworkStatus(true);
        });

        window.addEventListener("offline", () => {
            setnetworkStatus(false);
        });
    }, [])

    return networkStatus;
}

export default useNetworkStatus;