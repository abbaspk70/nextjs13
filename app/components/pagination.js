'use client'
import Link from "next/link";

export default function Pagination({totalPages}){
const renderPages = [];
for (let i = 1; i <= totalPages; i++){
    renderPages.push(i);
}
return (
    <div className="flex justify-center">
        {renderPages.map((pageNumber)=>
        <Link key={pageNumber} className="mx-6" href={`users?page=${pageNumber}`}>{pageNumber}</Link>
        )}
    </div>
);
}