import { ContactList } from "./components/Contact";
import Form from "./components/Form";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto animate-fade-in grid gap-8">
        <Header />

        <Form />

        <ContactList />
      </div>
    </div>
  );
}
