import Photos from '@/components/Photos';
import Profile from '@/components/Profile';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Image from 'next/image';
import {
  AnimatedSection,
  AnimatedContent,
  AnimatedFeatureCard,
} from '@/components/AnimatedSection';

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
          <AnimatedSection delay={0.2}>
            <Profile />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-16">
              <p className="text-xl font-light tracking-wide text-white">
                Crafting digital experiences at the intersection of web2 and
                web3. Engineer Lead @{' '}
                <span className="text-indigo-500 underline decoration-indigo-500 underline-offset-2 hover:cursor-pointer hover:text-indigo-400 hover:decoration-indigo-400">
                  Mastercard
                </span>
                .
              </p>

              <Photos />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="mt-20">
              <h1 className="text-2xl font-medium tracking-wide text-gray-400">
                Now
              </h1>
              <div className="mt-6 space-y-4 text-xl font-thin tracking-wide text-white">
                <AnimatedContent delay={0.8}>
                  <p>
                    I&apos;m an engineer with a passion for building innovative
                    solutions that solve real-world problems and make technology
                    more accessible to everyone. With over 8 years of experience
                    in software development, I&apos;ve worked across multiple
                    verticals and companies including Enterprise Technology,
                    Cloud Computing, Healthcare, Insurance, and Fintech.
                  </p>
                </AnimatedContent>
                <AnimatedContent delay={1}>
                  <p>
                    Over the past few years, I&apos;ve been exploring the
                    intersection of web development and emerging blockchain
                    technologies. In my spare time, I enjoy learning about
                    cutting-edge innovations and sharpening my skills by
                    building projects at conferences, hackathons, or simply for
                    fun.
                  </p>
                </AnimatedContent>
                <AnimatedContent delay={1.2}>
                  <p>
                    I like to work in an autonomous, free-flowing way — avoiding
                    bureaucratic tape and mundane processes. If something needs
                    to get done, I believe in making it happen efficiently,
                    while keeping communication open and objectives clear.
                  </p>
                </AnimatedContent>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1.4}>
            <div className="mt-20">
              <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Projects Column */}
                <AnimatedFeatureCard delay={1.6}>
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
                        <p className="mt-2 text-gray-400">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </AnimatedFeatureCard>

                {/* Building Column */}
                <AnimatedFeatureCard delay={1.8}>
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
                        <p className="mt-2 text-gray-400">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </AnimatedFeatureCard>

                {/* Fun Column */}
                <AnimatedFeatureCard delay={2}>
                  <div>
                    <h2 className="mb-4 text-xl font-semibold text-white">
                      Fun
                    </h2>
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
                        <p className="mt-2 text-gray-400">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </AnimatedFeatureCard>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={2.2}>
            <div className="mt-20">
              <h1 className="text-2xl font-medium tracking-wide text-gray-400">
                Connect
              </h1>
              <div className="mt-6">
                <AnimatedContent delay={2.4}>
                  <p className="text-xl font-thin tracking-wide text-white">
                    Connect with me on{' '}
                    <Link
                      href="https://www.linkedin.com/in/walid-nasim/"
                      className="text-indigo-500 underline hover:text-indigo-400"
                    >
                      LinkedIn
                    </Link>
                    , view my code and open-source projects on{' '}
                    <Link
                      href="https://github.com/wanasim"
                      className="text-indigo-500 underline hover:text-indigo-400"
                    >
                      Github
                    </Link>
                    , download my resume{' '}
                    <Link
                      href="/resume.pdf"
                      className="text-indigo-500 underline hover:text-indigo-400"
                    >
                      here
                    </Link>
                    , or email me directly at{' '}
                    <Link
                      href="mailto:walid.nasim@wnasim.dev"
                      className="text-indigo-500 underline hover:text-indigo-400"
                    >
                      walid.nasim@wnasim.dev
                    </Link>
                    .
                  </p>
                </AnimatedContent>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
