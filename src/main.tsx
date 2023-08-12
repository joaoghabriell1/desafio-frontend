import { FilterContextProvider } from "./store/filter-context.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </QueryClientProvider>
);
