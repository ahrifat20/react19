import { Suspense, use, useState } from "react";

const fetchMessage = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🚀");
    }, 1000);
  });
};

const MessageOutput = ({ messagePromise }) => {
  const message = use(messagePromise);

  return <p className="text-xl">Here is the message: {message}</p>;
};

const MessageContent = ({ messagePromise }) => {
  return (
    <Suspense fallback={<p className="text-xl">⌛ Downloading message...</p>}>
      <MessageOutput messagePromise={messagePromise} />
    </Suspense>
  );
};

export default function UseHookPromise() {
  const [showButton, setShowButton] = useState(false);
  const [storePromise, setStorePromise] = useState(null);
  const download = () => {
    setStorePromise(fetchMessage());
    setShowButton(true);
  };
  return showButton ? (
    <MessageContent messagePromise={storePromise} />
  ) : (
    <button
      onClick={download}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Download message
    </button>
  );
}
