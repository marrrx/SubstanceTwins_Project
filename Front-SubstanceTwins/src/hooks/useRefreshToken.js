import clientAxios from "../config/axios"


const useRefreshToken = () => {


    const refresh = async () => {

        const response = await clientAxios.get('/refresh');
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
        })
    }
    return (
        <div>useRefreshToken</div>
    )

return 


}

    export default useRefreshToken;