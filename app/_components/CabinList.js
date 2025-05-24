import CabinCard from '@/app/_components/CabinCard';
import { getCabins } from '@/app/_lib/data-service';
import { unstable_noStore } from 'next/cache';

function filterCabins(cabins, filter) {
  let displayCabins;
  switch (filter) {
    case 'small':
      displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
      break;
    case 'medium':
      displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7);
      break;
    case 'large':
      displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
      break;
    case 'all':
      displayCabins = cabins;
      break;

    default:
      displayCabins = cabins;
      break;
  }

  return displayCabins;
}

export default async function CabinList({ filter }) {
  // unstable_noStore()
  const cabins = await getCabins();
  let filteredCabins = filterCabins(cabins, filter);

  if (!cabins.length) return null;

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
