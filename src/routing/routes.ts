
import Home from "../features/home/Home";
import WordList from "../features/words/WordList";

const LAYOUT_ROUTES = [
    {
        path: "/",
        element: Home,
    },
    {
        path: "/pronunciation ",
        element: WordList,
    }
];

export { LAYOUT_ROUTES };