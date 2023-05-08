import { Link } from "react-router-dom";

export default function Homepage({ phonesList }) {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Phones
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {phonesList ? (
            <ul role="list" className="divide-y divide-gray-100">
              {phonesList.map((phone) => (
                <li
                  key={phone.id}
                  className="flex p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 bg-white justify-between gap-x-6 py-5"
                >
                  <div className="flex gap-x-4">
                    {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={phone.imageUrl} alt="" /> */}
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {phone.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {phone.manufacturer}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {phone.price}
                    </p>
                    <Link
                      to={`/phones/${phone.id}`}
                      className="mt-1 text-xs leading-5 text-gray-500"
                    >
                      Details
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div
              class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
