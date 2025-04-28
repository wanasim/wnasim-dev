import Timeline from '@/components/Timeline';
import Mastercard from '../../../public/mastercard.svg';
import Oracle from '../../../public/oracle.svg';
import Evolent from '../../../public/evolent.png';

export default function Page() {
  const companiesData = [
    {
      name: 'Mastercard',
      logo: Mastercard,
      year: '2000',
    },
    {
      name: 'Evolent Health',
      logo: Evolent,
      year: '2005',
      background: 'bg-primary-dark',
      imageSize: 'h-1/5',
    },
    {
      name: 'Oracle',
      logo: Oracle,
      year: '2010',
    },
    // Add more companies as needed
  ];

  return (
    <>
      <div className="px-4 sm:px-8 lg:px-12">
        <div className="px-8">
          <header className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Some title
            </h1>
            <p className="mt-6 text-base text-gray-400">some intro</p>
          </header>
          <div className="mt-16 sm:mt-20">
            <Timeline companies={companiesData} />
          </div>
        </div>
      </div>
    </>
  );
}
