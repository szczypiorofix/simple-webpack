import { debugClass, debugMethod } from "./wrapper/Debug";


@debugClass()
class AppCore {

    public name: string;

    public constructor() {
        this.name = "";
    }

    @debugMethod( true )
    public start( name: string ): void {
        console.log("Starting App with name " + name);
    }

}

export default AppCore;
