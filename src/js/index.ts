import AppCore from "./core/AppCore";

import "normalize.css";
import "../scss/main.scss";


(async () => {
    const app: AppCore = new AppCore({
        debugging: true
    });
    await new Promise(resolve => setTimeout(resolve, 1000)); // ask for launching the app after 1 second
    app.start();
})();
