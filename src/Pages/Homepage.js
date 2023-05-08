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
        <li key={phone.id} className="flex p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 bg-white justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={phone.imageUrl} alt="" /> */}
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{phone.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{phone.manufacturer}</p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{phone.price}</p>
            {phone.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={phone.lastSeenDateTime}>{phone.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
            
          ) : (
            "SPINNER"
          )}
        
        </div>
      </main>
    </div>
  );
}
