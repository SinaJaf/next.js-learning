// Client side component
// 'use client';

// import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation';

// const PropertyPage = () => {
//   const router = useRouter();
//   const params = useParams();
//   const searchParams = useSearchParams();
//   const pathname = usePathname();

//   return (
//     <div className="text-2xl">
//       Properties Page { params.id } <br/> name: { searchParams.get('name') } <br/> path: localhost:3000{ pathname }
//     <br/>
//     <button className='text-[#2563eb]' onClick={() => router.replace('/')}>
//       Go Home
//     </button> 
//     </div>
//   );
      
// }

// Server side component
const PropertyPage = ({ params, searchParams, pathname }) => {

  return (
    <div className="text-2xl">
      Properties Page { params.id } <br/> name: { searchParams.name } <br/> path: localhost:3000{ pathname }
    <br/>
    <button className='text-[#2563eb]'>
      Go Home
    </button> 
    </div>
  );
      
}
 
export default PropertyPage;