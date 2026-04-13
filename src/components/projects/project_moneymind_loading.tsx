export default function ProjectMoneyMindLoading() {
  return (
    <div className="mt-20 flex min-h-screen w-full flex-col items-center px-4 pb-16 md:px-8">
      <div className="grid w-full max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 backdrop-blur md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:p-10">
        <div className="flex animate-pulse flex-col justify-center gap-6">
          <div className="h-6 w-36 rounded-full bg-white/10" />

          <div className="space-y-4">
            <div className="h-14 w-2/3 rounded-2xl bg-white/10 md:h-20" />
            <div className="h-4 w-full max-w-2xl rounded bg-white/10" />
            <div className="h-4 w-5/6 max-w-xl rounded bg-white/10" />
          </div>

          <div className="h-11 w-40 rounded-full bg-white/10" />
        </div>

        <div className="flex items-center justify-center">
          <div className="flex w-full max-w-[340px] items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-black/20">
            <div className="aspect-square w-full max-w-[260px] animate-pulse rounded-[1.75rem] bg-white/10 md:max-w-[300px]" />
          </div>
        </div>
      </div>

      <section className="mt-12 w-full max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur">
            <div className="h-3 w-32 animate-pulse rounded bg-white/10" />
            <div className="mt-4 h-8 w-2/3 animate-pulse rounded bg-white/10" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-white/10" />
              <div className="h-4 w-11/12 animate-pulse rounded bg-white/10" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-white/10" />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React Native", "Express.js", "MySQL"].map((item) => (
                <span
                  key={item}
                  className="h-7 w-24 animate-pulse rounded-full bg-white/10"
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <article
                key={index}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 shadow-md shadow-black/10"
              >
                <div className="h-5 w-1/2 animate-pulse rounded bg-white/10" />
                <div className="mt-3 space-y-2">
                  <div className="h-4 w-full animate-pulse rounded bg-white/10" />
                  <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl">
        <div className="mt-12 mb-6">
          <div className="h-3 w-40 animate-pulse rounded bg-white/10" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 shadow-lg shadow-black/20"
            >
              <div className="h-[320px] w-full animate-pulse bg-white/10 sm:h-[360px]" />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
