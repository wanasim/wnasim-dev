import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import ScrollToTop from './ScrollToTop';

export default function MastercardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-6 sm:px-8 lg:px-12">
      <ScrollToTop />
      <div className="px-8">
        <div className="mt-20">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-medium tracking-wide text-indigo-400">
            Mastercard
          </h1>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
