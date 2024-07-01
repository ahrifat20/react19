import { useState } from "react";
import "./App.css";
import FormAction from "./components/FormAction";
import UseFormState from "./components/UseFormState";
import UseFormStatus from "./components/UseFormStatus";
import UseHookContext from "./components/UseHookContext";
import UseHookFetchData from "./components/UseHookFetchData";
import UseHookPromise from "./components/UseHookPromise";
import UseOptimistic from "./components/UseOptimistic";

function App() {
  const [example, setExample] = useState("");

  const handleChange = (e) => {
    setExample(e.target.value);
  };

  // choose which example to render
  let content;

  if (example === "useHookFetchData") {
    content = <UseHookFetchData />;
  }
  if (example === "useHookPromise") {
    content = <UseHookPromise />;
  }
  if (example === "useHookContext") {
    content = <UseHookContext />;
  }
  if (example === "action") {
    content = <FormAction />;
  }
  if (example === "useFormStatus") {
    content = <UseFormStatus />;
  }
  if (example === "useFormState") {
    content = (
      <>
        <UseFormState itemID="1" title="Product 1" />
        <UseFormState itemID="2" title="Product 2" />
      </>
    );
  }
  if (example === "useOptimistic") {
    content = <UseOptimistic />;
  }
  // Auto memoirztion
  // No more forward ref and
  // no more lazy()
  return (
    <div className="p-12">
      <h1 className="font-bold text-3xl">What&apos;s coming in React 19</h1>

      <div className="mt-5">
        I have created some examples to explore the new features.:
      </div>

      <div className="mt-10">
        <select onChange={handleChange}>
          <option value="">Select example</option>
          <option value="useHookFetchData">
            &quot;use&quot; Hook to fetch data
          </option>
          <option value="useHookPromise">
            &quot;use&quot; Hook with promise
          </option>
          <option value="useHookContext">
            &quot;use&quot; Hook with context
          </option>
          <option value="action">&quot;Form Action&quot;</option>
          <option value="useFormStatus">&quot;useFormStatus&quot;</option>
          <option value="useFormState">&quot;useFormState&quot;</option>
          <option value="useOptimistic">&quot;useOptimistic&quot;</option>
        </select>
      </div>

      <div className="mt-10">{content}</div>
    </div>
  );
}

export default App;
