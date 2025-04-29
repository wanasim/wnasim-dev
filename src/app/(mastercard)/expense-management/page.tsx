import Image from 'next/image';
import {
  AnimatedSection,
  AnimatedContent,
  AnimatedImage,
  AnimatedFeatureCard,
} from '@/components/AnimatedSection';

export default function ExpenseManagement() {
  return (
    <div>
      <AnimatedSection delay={0.2}>
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Expense Management
        </h2>
        <p className="mt-2 text-xl text-gray-400">
          One of the core products I built at Mastercard. A web and mobile app
          that allows users to manage their corporate credit cards, approval
          workflows, enrich transactions, and more.
        </p>
        <AnimatedImage delay={0.4}>
          <Image
            src="/smartdatacover.png"
            alt="Expense Management Overview"
            width={1200}
            height={600}
            className="rounded-lg object-cover py-4"
          />
        </AnimatedImage>
      </AnimatedSection>

      {/* Objective */}
      <AnimatedSection delay={0.6}>
        <h2 className="mt-16 text-3xl font-semibold text-indigo-500">
          Objectives & Goals
        </h2>
        <div className="mt-6 space-y-4 text-xl text-white">
          <AnimatedContent delay={0.8}>
            <p>
              Our key offering for our users is a platform called Smart Data
              which is made up of a bunch of different applications connected to
              a myriad of APIs and data sources. One of the primary apps I
              worked on was to modernize a legacy app called Expense Management.
              As the name implies it enables our users to manage the lifecycle
              of their transactions. Our key objective was to modernize this
              both from a frontend/UI perspective as well as from an API tier
              since the current monolith architecture was becoming difficult to
              maintain and troubleshoot. I helped modernize the app by migrating
              it to a new tech stack - Angular and Java SpringBoot - that was
              more maintainable and scalable. I also helped improve the overall
              user experience by adding new features and improving the existing
              ones. Also, leveraging a microservices architecture helped us
              break down the monolith and enable faster development and
              deployment cycles. It also helped to minimize risk since we could
              now deploy smaller chunks of code more frequently, and
              troubleshoot points of failure.
            </p>
          </AnimatedContent>
        </div>
      </AnimatedSection>

      {/* Key Features Section */}
      <AnimatedSection delay={1}>
        <h2 className="mt-16 text-3xl font-semibold text-indigo-500">
          Key Features
        </h2>
        <div className="mt-6 space-y-8">
          {/* 1. Expense Dashboard: Image left, text right */}
          <AnimatedFeatureCard
            delay={1.2}
            className="flex flex-col items-center gap-8 md:flex-row"
          >
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[16/10] w-10/12 md:w-full">
                <Image
                  src="/dashboard.png"
                  alt="Expense Dashboard"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(min-width: 768px) 400px, 100vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full space-y-4 md:w-1/2">
              <h3 className="text-xl font-medium text-white">
                Expense Dashboard
              </h3>
              <p className="text-gray-400">
                The dashboard provides users with quick insights into their
                spending, recent transactions, and outstanding approvals.
                Interactive charts and summary cards offer a high-level
                overview, while direct links allow users to quickly access
                detailed features like grouping, enrichment, and approval
                workflows.
              </p>
            </div>
          </AnimatedFeatureCard>

          {/* 2. Data Enrichment: Image right, text left */}
          <AnimatedFeatureCard
            delay={1.4}
            className="flex flex-col items-center gap-8 md:flex-row-reverse"
          >
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[16/10] w-10/12 md:w-full">
                <Image
                  src="/expensedetails.png"
                  alt="Data Enrichment"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(min-width: 768px) 400px, 100vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full space-y-4 md:w-1/2">
              <h3 className="text-xl font-medium text-white">
                Data Enrichment
              </h3>
              <p className="text-gray-400">
                Enhance raw transaction data with merchant details, location,
                and context. This provides users with actionable insights and a
                clearer understanding of their spending patterns.
              </p>
            </div>
          </AnimatedFeatureCard>

          {/* 3. Approval Workflows: Image left, text right */}
          <AnimatedFeatureCard
            delay={1.6}
            className="flex flex-col items-center gap-8 md:flex-row"
          >
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[16/10] w-10/12 md:w-full">
                <Image
                  src="/approvalworkflow.png"
                  alt="Approval Workflows"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(min-width: 768px) 400px, 100vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full space-y-4 md:w-1/2">
              <h3 className="text-xl font-medium text-white">
                Approval Workflows
              </h3>
              <p className="text-gray-400">
                Streamline expense approvals with customizable workflows.
                Managers can review, approve, or reject expenses, ensuring
                compliance and accountability at every step.
              </p>
            </div>
          </AnimatedFeatureCard>

          {/* 4. Microservices Architecture: Image right, text left */}
          <AnimatedFeatureCard
            delay={1.8}
            className="flex flex-col items-center gap-8 md:flex-row-reverse"
          >
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[16/10] w-10/12 md:w-full">
                <Image
                  src="/microservice-architecture.png"
                  alt="Microservices Architecture"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(min-width: 768px) 400px, 100vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full space-y-4 md:w-1/2">
              <h3 className="text-xl font-medium text-white">
                Microservices Architecture
              </h3>
              <p className="text-gray-400">
                Built on a scalable microservices architecture, the platform
                ensures high availability, easy maintenance, and seamless
                integration with other business systems.
              </p>
            </div>
          </AnimatedFeatureCard>
        </div>
      </AnimatedSection>
    </div>
  );
}
