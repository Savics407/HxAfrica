import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useNetworkStatus() {
  const [status, setStatus] = useState(navigator.online);

  useEffect(() => {
    const setOnline = () => {
      setStatus(true);
    };

    const setOffline = () => {
      setStatus(false);
    };

    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);
    // status === true ? toast("online") : toast.error("offline");

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);
  status === true ? alert("online") : alert("offline");

  return status;
}

export default useNetworkStatus;
