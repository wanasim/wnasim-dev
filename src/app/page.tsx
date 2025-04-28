import Photos from '@/components/Photos';
import Profile from '@/components/Profile';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const projects = [
    {
      name: 'Comet UI',
      description:
        'Mastercard Design System I helped pioneer over the past couple years - everything from components, to design tokens, to client branding.',
      link: '/comet-ui',
      external: false,
    },
    {
      name: 'Expense Management',
      description:
        'One of the core products I built at Mastercard. A web and mobile app that allows users to manage their corporate credit cards, approval workflows, enrich transactions, and more.',
      link: '/expense-management',
      external: false,
    },
    {
      name: 'OlafurGPT',
      description:
        'Chatbot that answers any and all questions about one of my favorite artists, Olafur Arnalds. Built with NextJS, LlamaIndex, and AstraDB.',
      link: 'https://olafurgpt.wnasim.dev',
      external: true,
    },
    {
      name: 'Lit Messages',
      description:
        'Generate digital signatures via Google Auth with Lit Protocol, a decentralized key management network.',
      link: 'https://lit.wnasim.dev',
      external: true,
    },
  ];

  const building = [
    {
      name: 'Pakoli',
      description:
        'An ecommerce platform that connects shoppers with local Afghan artisans and craftspeople.',
      link: 'https://github.com/wanasim/pakoli-io',
      external: true,
    },
    {
      name: 'Property Agent',
      description:
        'In the initial stages of building an agentic property management platform. Stay tuned!',
    },
  ];

  const fun = [
    {
      name: 'EthGlobal',
      description:
        'My go-to for hackathons, building projects, and meeting new people in the web3 space. Recently attended Agentic Ethereum, EthGlobal San Francisco, ETHOnline, and EthDenver.',
      link: 'https://ethglobal.com/events',
      external: true,
    },
    {
      name: 'Alif',
      description: 'A conference for Muslim builders and entrepreneurs.',
      link: 'https://alif.build/summit',
      external: true,
    },
    {
      name: 'LlamaIndex',
      description:
        'PR contributor to the open-source TS library - fixed an issue with NextJS deployments on Vercel/',
      link: 'https://github.com/run-llama/create-llama/issues/164#issuecomment-2262313425',
      external: true,
    },
  ];
  return (
    <>
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="px-8">
          <Profile />

          <div className="mt-16">
            <p className="text-xl font-light tracking-wide text-white">
              Crafting digital experiences at the intersection of web2 and web3.
              Engineer Lead @{' '}
              <span className="text-indigo-500 underline decoration-indigo-500 underline-offset-2 hover:cursor-pointer hover:text-indigo-400 hover:decoration-indigo-400">
                Mastercard
              </span>
              .
            </p>
            <div className="-ml-[10%] mt-8 w-[120%] sm:-ml-[5%] sm:w-[110%] md:-ml-[5%] md:w-[90%] lg:-ml-[5%] lg:w-[80%]">
              <Photos />
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-2xl font-medium tracking-wide text-gray-400">
              Now
            </h1>
            <div className="mt-6">
              <p className="text-xl font-thin tracking-wide text-white">
                I&apos;m a software engineer with a passion for building
                products that help people live better lives. I&apos;m currently
                the Engineer Lead at Mastercard, where I lead a team of
                engineers building products that help people live better lives.
                In my spare time, I like to learn about bleeding edge
                technologies and refine my skills by building at conferences,
                hackathons, or just for fun. I like to work in an autonomous,
                free-flowing way. meaning no bureacratic tape or mundane
                processes - if we need to get something done, then lets make it
                happen.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Projects Column */}
              <div>
                <h2 className="mb-4 text-xl font-semibold text-white">
                  Projects
                </h2>
                {projects.map((project) => (
                  <div key={project.name} className="mb-6">
                    <Link
                      href={project.link}
                      prefetch={true}
                      scroll={false}
                      className="inline-flex items-center gap-1 text-lg font-medium text-indigo-500 underline hover:text-indigo-400 hover:decoration-indigo-400"
                    >
                      {project.name}
                      {project.external && (
                        <ArrowTopRightIcon className="h-4 w-4" />
                      )}
                    </Link>
                    <p className="mt-2 text-gray-400">{project.description}</p>
                  </div>
                ))}
              </div>

              {/* Building Column */}
              <div>
                <h2 className="mb-4 text-xl font-semibold text-white">
                  Building
                </h2>
                {building.map((project) => (
                  <div key={project.name} className="mb-6">
                    <Link
                      href={project.link ?? ''}
                      className="inline-flex items-center gap-1 text-lg font-medium text-indigo-500 underline hover:text-indigo-400 hover:decoration-indigo-400"
                    >
                      {project.name}
                      {project.external && (
                        <ArrowTopRightIcon className="h-4 w-4" />
                      )}
                    </Link>
                    <p className="mt-2 text-gray-400">{project.description}</p>
                  </div>
                ))}
              </div>

              {/* Fun Column */}
              <div>
                <h2 className="mb-4 text-xl font-semibold text-white">Fun</h2>
                {fun.map((project) => (
                  <div key={project.name} className="mb-6">
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-1 text-lg font-medium text-indigo-500 underline hover:text-indigo-400 hover:decoration-indigo-400"
                    >
                      {project.name}
                      {project.external && (
                        <ArrowTopRightIcon className="h-4 w-4" />
                      )}
                    </Link>
                    <p className="mt-2 text-gray-400">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-2xl font-medium tracking-wide text-gray-400">
              My Philosophy
            </h1>
            <div className="mt-6">
              <p className="text-xl font-thin tracking-wide text-white">
                I like to work in an autonomous, free-flowing way. meaning no
                bureacratic tape or mundane processes - if we need to get
                something done, then lets make it happen
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-2xl font-medium tracking-wide text-gray-400">
              Connect
            </h1>
            <div className="mt-6">
              <p className="text-xl font-thin tracking-wide text-white">
                Connect with me on LinkedIn, view my code and open-source
                projects on Github, or{' '}
                <Link
                  href="mailto:walid.nasim@wnasim.dev"
                  className="text-indigo-500 underline hover:text-indigo-400"
                >
                  email me directly
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
