import { useCallback, useState } from "react";

//use{name} for hook convention
export const useGetUser = (username: string): [
    data: any | undefined,
    loading: boolean,
    error: boolean,
    fetchData: () => Promise<any>
] => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchUser = useCallback(async () => {
        try {
            const res = await fetch("https://lichess.org/api/user/"+username)

            if (res){
                if (res.ok === true){
                    //await json
                    setData(res.json())
                }
                setLoading(false);
            }
            
            return res;
        } catch (error) {
            setError(true);
            setLoading(false);
            return;
        }
        
    }, [username]);

    return [data, loading, error, fetchUser]
}