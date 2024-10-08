import PropertyCard from '@/components/PropertyCard';
// import properties from '@/properties.json';
import connectDB from '@/models/User';
import Property from '@/models/property';

const PropertiesPage = async () => {
  await connectDB();
  const properties = await Property.find({}).lean();
  return ( 
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        {
          properties.lenght === 0 ? ( <p>No Properties Found</p> ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {
                properties.map((property) => (
                  <PropertyCard key={ property._id } property={ property }></PropertyCard>
                ))
              }
            </div>
          )
        }
      </div>
    </section>
  );
      
}
 
export default PropertiesPage;