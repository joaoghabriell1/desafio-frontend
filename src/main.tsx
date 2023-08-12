import { FilterContextProvider } from "./store/filter-context.tsx";
import { ModalContextProvider } from "./store/modal-context.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <ModalContextProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </ModalContextProvider>
  </QueryClientProvider>
);
