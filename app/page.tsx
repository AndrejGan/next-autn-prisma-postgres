
export default function Home() {
  return (
      <section className='w-full flex-center flex-col'>
          <h1 className='head_text text-center'>
              Discover & Share
              <br className='max-md:hidden' />
              <span className='orange_gradient text-center'> Next-Auth-Prisma-Postgres </span>
          </h1>
          <p className={"text-center mt-3 blue_gradient font-bold text-2xl"}>User Profile and Admin Dashboard</p>
          <p className={"text-center mt-3  font-bold text-2xl"}>Authorization using VK, Yandex, Google</p>
      </section>
  )
}
