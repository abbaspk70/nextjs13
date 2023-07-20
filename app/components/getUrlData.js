export async function getUrlData({routerData,searchPage}){
    const url = `https://reqres.in/api/${routerData}${searchPage}`;
    const res = await fetch(url);
    console.log(url);
if (!res.ok) {
   throw new Error('Failed to fetch Data')
}
return res.json();
}