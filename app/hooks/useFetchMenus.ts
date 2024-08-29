import { useEffect, useState } from "react";
import { MenuResponse } from "../data/model/response/MenuResponse";
import { loadMenus } from "../data/repository/menuRepository";
import { useDispatch } from "react-redux";

export const useFetchMenus = () => {
    const [menus, setMenus] = useState<MenuResponse[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const [error, setError] = useState<string | null>(null);

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const fetchedData = await loadMenus();
                // dispatch(setMenus(fetchedData));
                setMenus(fetchedData);
            } catch (err) {
                setError("Error fetching menus " + err);
            } finally {
                setLoading(false);
            }
        };

        fetchMenus();
    }, []);

    return { menus, loading, error };
};