export default function Values() {
  const features = [
    {
      name: "Push to deploy",
      description:
        "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    },
    {
      name: "SSL certificates",
      description:
        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    },
    {
      name: "Simple queues",
      description:
        "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    },
    {
      name: "Advanced security",
      description:
        "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    },
  ];
  return (
    <>
      <div className="mt-10">
        <div className="mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                className="hover:bg-zinc-700 ease-linear delay-75 transition p-4 rounded-lg"
                key={feature.name}
              >
                <div className="relative pl-16">
                  <dt className="text-xl font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500">
                      {/* <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      /> */}
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-lg leading-7 text-zinc-400">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
