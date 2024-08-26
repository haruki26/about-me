import { RouterProvider, createMemoryHistory, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const memoryHistory = createMemoryHistory({
    initialEntries: ["/"],
});

const router = createRouter({
    routeTree: routeTree,
    history: memoryHistory,
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const App = () => <RouterProvider router={router} />;

export default App;