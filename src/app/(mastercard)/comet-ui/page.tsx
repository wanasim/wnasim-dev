import Image from 'next/image';
import {
  AnimatedSection,
  AnimatedContent,
  AnimatedImage,
  AnimatedFeatureCard,
} from '@/components/AnimatedSection';

export default function CometUI() {
  return (
    <div className="space-y-20">
      {/* Title Section */}
      <AnimatedSection delay={0.2}>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Comet UI</h1>
        <p className="mt-2 text-xl text-gray-400">
          Mastercard&apos;s Design System
        </p>
        <AnimatedImage delay={0.4}>
          <Image
            src="/comet_snapshot.png"
            alt="Comet UI Snapshot"
            width={1200}
            height={600}
            className="rounded-lg object-cover py-4"
          />
        </AnimatedImage>
      </AnimatedSection>

      {/* Problem Section */}
      <AnimatedSection delay={0.6}>
        <h2 className="text-3xl font-semibold text-indigo-500">
          The Challenge
        </h2>
        <div className="mt-6 space-y-4 text-xl text-white">
          <p>
            Before Comet UI, Mastercard&apos;s development teams faced several
            critical challenges:
          </p>
          <AnimatedContent delay={0.8}>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Inconsistent user experiences across different applications
              </li>
              <li>Accessibility issues affecting compliance and user reach</li>
              <li>Duplicated development efforts and redundant code</li>
              <li>Lack of standardization in design patterns and components</li>
              <li>
                Slow development cycles due to reinventing common solutions
              </li>
              <li>Fragmented Angular component libraries across teams</li>
            </ul>
          </AnimatedContent>
        </div>
      </AnimatedSection>

      {/* Strategy Section */}
      <AnimatedSection delay={1}>
        <h2 className="text-3xl font-semibold text-indigo-500">Our Approach</h2>
        <div className="mt-6 space-y-8">
          {/* 1. Snapshot: Image left, text right */}
          <AnimatedFeatureCard
            delay={1.2}
            className="flex flex-col items-center gap-8 md:flex-row"
          >
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
          </AnimatedFeatureCard>

          {/* 2. Foundations and Styles: Image right, text left */}
          <AnimatedFeatureCard
            delay={1.4}
            className="flex flex-col items-center gap-8 md:flex-row-reverse"
          >
            <div className="flex-1">
              <Image
                src="/foundations.png"
                alt="Foundations and Styles"
                width={400}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-medium text-white">
                Foundations and Styles
              </h3>
              <p className="text-gray-400">
                Comet&apos;s foundations offer a visual language and structure
                that guarantee a consistent application of design principles
                across all products. These building blocks enable teams to
                create accessible, cohesive solutions for users.
              </p>
            </div>
          </AnimatedFeatureCard>

          {/* 3. Reusable Components and Patterns: Image left, text right */}
          <AnimatedFeatureCard
            delay={1.6}
            className="flex flex-col items-center gap-8 md:flex-row"
          >
            <div className="flex-1">
              <Image
                src="/components_patterns.png"
                alt="Reusable Components and Patterns"
                width={400}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-medium text-white">
                Reusable Components and Patterns
              </h3>
              <p className="text-gray-400">
                Our extensive set of components and patterns accelerates the
                build and experience for all teams. Comet&apos;s architecture
                ensures each component is flexible enough to meet each
                company&apos;s needs while being rigid enough to create
                structure and cohesion for a user&apos;s cross-platform journey.
              </p>
            </div>
          </AnimatedFeatureCard>

          {/* 4. Guidelines and Best Practices: Image right, text left */}
          <AnimatedFeatureCard
            delay={1.8}
            className="flex flex-col items-center gap-8 md:flex-row-reverse"
          >
            <div className="flex-1">
              <Image
                src="/guidelines.png"
                alt="Guidelines and Best Practices"
                width={400}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-medium text-white">
                Guidelines and Best Practices
              </h3>
              <p className="text-gray-400">
                Comet&apos;s guidelines help product designers and developers
                make informed decisions, ensuring quality and consistency across
                all products. These include accessibility standards, research,
                and platform-specific recommendations.
              </p>
            </div>
          </AnimatedFeatureCard>
        </div>
      </AnimatedSection>

      {/* Solution Section */}
      <AnimatedSection delay={2}>
        <h2 className="text-3xl font-semibold text-indigo-500">The Impact</h2>
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <AnimatedFeatureCard
              delay={2.2}
              className="rounded-lg bg-zinc-800/50 p-6"
            >
              <h3 className="text-xl font-medium text-white">
                Development Speed
              </h3>
              <p className="mt-2 text-gray-400">
                40% reduction in development time for new features
              </p>
            </AnimatedFeatureCard>
            <AnimatedFeatureCard
              delay={2.4}
              className="rounded-lg bg-zinc-800/50 p-6"
            >
              <h3 className="text-xl font-medium text-white">Accessibility</h3>
              <p className="mt-2 text-gray-400">
                100% WCAG 2.1 AA compliance across all components
              </p>
            </AnimatedFeatureCard>
            <AnimatedFeatureCard
              delay={2.6}
              className="rounded-lg bg-zinc-800/50 p-6"
            >
              <h3 className="text-xl font-medium text-white">
                User Experience
              </h3>
              <p className="mt-2 text-gray-400">
                Consistent, polished interfaces across all Mastercard
                applications
              </p>
            </AnimatedFeatureCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Future Section */}
      <AnimatedSection delay={2.4}>
        <h2 className="text-3xl font-semibold text-indigo-500">
          Looking Forward
        </h2>
        <div className="mt-6 space-y-4 text-xl text-white">
          <p>Comet UI continues to evolve, with ongoing improvements in:</p>
          <AnimatedContent delay={2.6}>
            <ul className="list-disc space-y-2 pl-6">
              <li>Enhanced component customization options</li>
              <li>Expanded design token system</li>
              <li>Improved performance optimizations</li>
              <li>New component additions based on team feedback</li>
              <li>Integration with emerging technologies and frameworks</li>
            </ul>
          </AnimatedContent>
        </div>
      </AnimatedSection>
    </div>
  );
}
