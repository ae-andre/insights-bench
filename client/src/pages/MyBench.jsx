import UserConversation from "../components/UserConversation";
// import { PlusIcon } from "@heroicons/react/20/solid";
// import ConversationsForm from "../components/ConversationsForm";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const items = [
  { id: 1 },
  // More items...
];

export default function MyBench() {
  return (
    <div className="h-screen">
      <ul
        role="list"
        className="flex-col w-auto m-auto mt-10 place-content-center space-y-3"
      >
        <h2 className="my-10 text-28 font-semibold leading-6 text-gray-900">
          Your Benches
        </h2>
        {items.map((item) => (
          <li
            key={item.id}
            className="overflow-hidden rounded-md bg-white px-6 py-4 shadow"
          >
            <UserConversation></UserConversation>
          </li>
        ))}
      </ul>
    </div>
  );
}
