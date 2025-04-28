import Image from 'next/image';

export default function CometUI() {
  return (
    <div className="space-y-20">
      {/* Title Section */}
      <div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Comet UI</h1>
        <p className="mt-2 text-xl text-gray-400">
          Mastercard&apos;s Design System
        </p>
        <Image
          src="/comet_snapshot.png"
          alt="Comet UI Snapshot"
          width={1200}
          height={600}
          className="rounded-lg object-cover py-4"
        />
      </div>

      {/* Problem Section */}
      <section>
        <h2 className="text-3xl font-semibold text-white">The Challenge</h2>
        <div className="mt-6 space-y-4 text-gray-400">
          <p>
            Before Comet UI, Mastercard&apos;s development teams faced several
            critical challenges:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Inconsistent user experiences across different applications</li>
            <li>Accessibility issues affecting compliance and user reach</li>
            <li>Duplicated development efforts and redundant code</li>
            <li>Lack of standardization in design patterns and components</li>
            <li>Slow development cycles due to reinventing common solutions</li>
            <li>Fragmented Angular component libraries across teams</li>
          </ul>
        </div>
      </section>

      {/* Strategy Section */}
      <section>
        <h2 className="text-3xl font-semibold text-white">Our Approach</h2>
        <div className="mt-6 space-y-8">
          {/* 1. Snapshot: Image left, text right */}
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <Image
                src="/interface.png"
                alt="Comet UI Overview"
                width={400}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-medium text-white">
                Solution to Scale an Interface Upgrade
              </h3>
              <p className="text-gray-400">
                Comet UI was created to address the need for a unified,
                scalable, and accessible design system across Corporate
                Solutions. Built with Angular, it provides a single source of
                truth for design, development, and best practices. Comet
                empowers teams to deliver consistent, high-quality user
                experiences and accelerate product delivery while leveraging
                Angular&apos;s powerful features and ecosystem.
              </p>
            </div>
          </div>

          {/* 2. Foundations and Styles: Image right, text left */}
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse">
            <div className="flex-1">
              <Image
                src="/foundations.png"
                alt="Foundations and Styles"
                width={400}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-white">
                Foundations and Styles
              </h3>
              <p className="text-gray-400">
                Comet's foundations offer a visual language and structure that
                guarantee a consistent application of design principles across
                all products. These building blocks enable teams to create
                accessible, cohesive solutions for users.
              </p>
            </div>
          </div>

          {/* 3. Reusable Components and Patterns: Image left, text right */}
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <Image
                src="/components_patterns.png"
                alt="Reusable Components and Patterns"
                width={400}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-white">
                Reusable Components and Patterns
              </h3>
              <p className="text-gray-400">
                Our extensive set of components and patterns accelerates the
                build and experience for all teams. Comet's architecture ensures
                each component is flexible enough to meet each company's needs
                while being rigid enough to create structure and cohesion for a
                user's cross-platform journey.
              </p>
            </div>
          </div>

          {/* 4. Guidelines and Best Practices: Image right, text left */}
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse">
            <div className="flex-1">
              <Image
                src="/guidelines.png"
                alt="Guidelines and Best Practices"
                width={400}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-white">
                Guidelines and Best Practices
              </h3>
              <p className="text-gray-400">
                Comet's guidelines help product designers and developers make
                informed decisions, ensuring quality and consistency across all
                products. These include accessibility standards, research, and
                platform-specific recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section>
        <h2 className="text-3xl font-semibold text-white">The Impact</h2>
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-zinc-800/50 p-6">
              <h3 className="text-xl font-medium text-white">
                Development Speed
              </h3>
              <p className="mt-2 text-gray-400">
                40% reduction in development time for new features
              </p>
            </div>
            <div className="rounded-lg bg-zinc-800/50 p-6">
              <h3 className="text-xl font-medium text-white">Accessibility</h3>
              <p className="mt-2 text-gray-400">
                100% WCAG 2.1 AA compliance across all components
              </p>
            </div>
            <div className="rounded-lg bg-zinc-800/50 p-6">
              <h3 className="text-xl font-medium text-white">
                User Experience
              </h3>
              <p className="mt-2 text-gray-400">
                Consistent, polished interfaces across all Mastercard
                applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section>
        <h2 className="text-3xl font-semibold text-white">Looking Forward</h2>
        <div className="mt-6 space-y-4 text-gray-400">
          <p>Comet UI continues to evolve, with ongoing improvements in:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Enhanced component customization options</li>
            <li>Expanded design token system</li>
            <li>Improved performance optimizations</li>
            <li>New component additions based on team feedback</li>
            <li>Integration with emerging technologies and frameworks</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
