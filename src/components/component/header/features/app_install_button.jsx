import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";

import '../../../css/header/menu_panel.css'

export default function AddToHomeScreen() {
  const [promptEvent, setPromptEvent] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS
    const ios =
      /iphone|ipad|ipod/i.test(window.navigator.userAgent) &&
      !window.MSStream;
    setIsIOS(ios);

    // Detect if already installed
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    ) {
      setIsInstalled(true);
    }

    // Capture install prompt (Android)
    const handler = (e) => {
      e.preventDefault();
      setPromptEvent(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Detect successful install
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setPromptEvent(null);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const installApp = async () => {
    // Already installed
    if (isInstalled) {
      alert("App already installed");
      return;
    }

    // iOS instruction
    if (isIOS) {
      alert("Tap Share → Add to Home Screen");
      return;
    }

    // Android install
    if (!promptEvent) {
      alert("Please reload the page to install the application");
      return;
    }

    promptEvent.prompt();
    await promptEvent.userChoice;
    setPromptEvent(null);
  };

  return (
    <div onClick={installApp}
      style={{ cursor: "pointer" }}
      title="Add to Home Screen"
      className="download_install_icon_parent no-highlight"
    >
      <div>
        <font className='install_font no-highlight'>
          Install the App&nbsp;&nbsp;
        </font>
      </div>
      <div className="download_install_icon">
        <font className='install_font'>
          <FiDownload />
        </font>
      </div>
    </div>
  );
}
