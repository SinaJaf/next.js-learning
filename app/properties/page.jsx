'use client';

import { useRouter } from 'next/navigation';

const PropertiesPage = () => {
  const router = useRouter();

  return ( 
    <div className="text-2xl text-[#2563eb]">
      <button onClick={() => router.replace('/')}>
        Go Home
      </button>
      <br/>
      <button onClick={() => router.replace('/properties/1?name=Sina')}>
        ID = 1
      </button>
    </div>
  );
      
}
 
export default PropertiesPage;