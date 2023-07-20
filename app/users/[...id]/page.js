import Card from "@/app/components/card";
import Pagination from "@/app/components/pagination";
import UserData from "@/app/user/[id]/page";
import { getUrlData } from "@/app/components/getUrlData";


export default async function UsersData({ params, searchParams}) {
    const searchPage = searchParams.page ?  `?page=${searchParams.page}` : '';
    const routerData = params.id.join('/');
    const data = await getUrlData({routerData, searchPage});
    const users = data.data;
    const totalPages = data.total_pages;
    console.log(routerData);
    console.log(searchPage);
    const user = data.data;

    return (
        <div className="">
            {params.id.length > 1 ? <div>
                <UserData user={user}></UserData>
            </div>
                :
            <div>
                <h1>this is dynamic user page with ID:{params.id}</h1>
                <div className='flex flex-wrap justify-center text-center'>

                    {users.map((user) =>
                        <Card imgUrl={user.avatar} title={`${user.first_name} ${user.last_name}`} contact={user.email} gotoUrl={`${routerData}/${user.id}`} />
                    )}</div>
                <Pagination totalPages={totalPages}></Pagination>
            </div>}
        </div>
             
    );
}

//export async function getUsersData(page){
//  const res = await fetch(url);
// if (!res.ok) {
//    throw new Error('Failed to fetch Data')
// }
//return res.json();
//}