import {
  Language,
  LanguageProps,
  ticketUrl,
} from "@/app/[lang]/_components/constants";
import { getDictionary } from "@/app/[lang]/_lib/dictionary";

const FloatingNavCover = async ({ params }: { params: { lang: Language } }) => {
  const dict = getDictionary(params.lang)!;
  const learn_more = dict.root.content.learn_more;
  const buy_tickets = dict.root.content.buy_tickets;
  return (
    <div className="fixed bottom-20 right-20 p-4 bg-white rounded-xl shadow-lg gt-sm:flex lt-sm:flex-col">
      <a
        href={`/${params.lang}/about`}
        className="inline-flex justify-center items-center mx-auto py-3 px-3 gt-lg:px-10 gt-lg:w-52 lt-sm:w-72 text-base font-medium text-center text-black rounded-lg bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 dark:focus:bg-indigo-400"
      >
        {learn_more}
      </a>
      <div className="lt-sm:my-4 gt-sm:mx-2" />
      <a
        href={ticketUrl}
        className="inline-flex justify-center items-center mx-auto py-3 px-3 gt-lg:px-10 gt-lg:w-52 lt-sm:w-72 text-base font-medium text-center text-white rounded-lg bg-indigo-900 hover:bg-indigo-950 focus:bg-indigo-950 animate-pulse"
      >
        {buy_tickets}
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          ></path>
        </svg>
      </a>
    </div>
  );
};
export { FloatingNavCover };
