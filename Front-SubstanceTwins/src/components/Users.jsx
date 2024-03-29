// import { useState, useEffect } from "react"
// import clientAxios from "../config/axios";

// const Users = () => {

//     const [users, setUsers] = useState();

//     useEffect(() => {
//         let isMounted = true;
//         const controller = new AbortController();
//         const getUsers = async () => {
//             try {
//                 const response = await clientAxios.get('/api/users', {
//                     signal: controller.signal
//                 });
//                 console.log(response.data);
//                 isMounted && setUsers(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//         getUsers();

//         return () => {
//             isMounted = false;
//             controller.abort();
//         }
//     }, [])

//     return (
//         <article>
//             <h2>Users list</h2>
//             {users?.length
//                 ? (
//                     <ul>
//                         {users.map((user, i) => <li key={i}>{user?.name}</li>)}
//                     </ul>

//                 ) : <p>No users to display</p>
//             }
//         </article>

//     );
// }

// export default Users    