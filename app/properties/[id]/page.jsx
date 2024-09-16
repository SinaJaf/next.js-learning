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
import PropertyHeaderImage from '@/components/PropertyHeaderImage'
import Property from '@/models/property';
import connectDB from '@/config/database';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import PropertyDetails from '@/components/PropertyDetails';
import PropertySidebar from '@/components/PropertySideBar';

// Server side component
const PropertyPage = async ({ params }) => {
  await connectDB();
  const property = await Property.findById(params.id).lean()

  return (
    <>
      <PropertyHeaderImage image={property.images[0]}/>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center">
            <FaArrowLeft className='mr-2'/>Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyDetails property={property}/>
            <PropertySidebar />
          </div>
        </div>
      </section>
    </>
  );
      
}
 
export default PropertyPage;