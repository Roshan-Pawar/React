import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useResMenu = (resId) => {
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setMenu(json);
    };
    
    return menu;
};

export default useResMenu;