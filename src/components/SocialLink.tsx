import clsx from 'clsx';
import Link from 'next/link';

export default function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  customStyle,
  download,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: React.ReactNode;
  customStyle?: boolean;
  download?: string;
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-gray-400 transition group-hover:text-indigo-500"
        download={download}
        target={download ? '_blank' : undefined}
        rel={download ? 'noopener noreferrer' : undefined}
      >
        <Icon
          className={`h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-indigo-500 ${
            customStyle ? 'group-hover:text-indigo-500' : ''
          }`}
        />
        <span className="ml-4 group-hover:text-indigo-500">{children}</span>
      </Link>
    </li>
  );
}
