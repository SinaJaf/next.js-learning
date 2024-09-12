import Link from 'next/link';

const HomePage = () => {
  return ( 
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link className='text-2xl text-[#2563eb]' href="/properties">Go To Properties</Link>
    </div>
   );
}
 
export default HomePage;