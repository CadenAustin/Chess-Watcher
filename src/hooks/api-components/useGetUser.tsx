import { useCallback, useState } from "react";

//use{name} for hook convention
export const useGetUser = (): [
    user: any | undefined,
    loading: boolean,
    error: boolean,
    fetchUser: (username: string) => Promise<any>
] => {
    const [user, setUser] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchUser = useCallback(async (username: string) => {
        try {
            const res = await fetch("https://lichess.org/api/user/"+username)

            if (res){
                if (res.ok === true){
                    //await json
                    const jsonData = await res.json()
                    setUser(jsonData)
                }
                setLoading(false);
            }
            
            return res;
        } catch (error) {
            setError(true);
            setLoading(false);
            return;
        }
        
    }, []);

    return [user, loading, error, fetchUser]
}