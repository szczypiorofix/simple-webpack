import { debugClass, debugMethod } from "./wrapper/Debug";

export interface AppCoreConfig {
    enableCaching?: boolean;
    debugging?: boolean;
}


@debugClass()
class AppCore {

    public enableCaching: boolean;
    public debugging: boolean;

    public constructor( config?: AppCoreConfig ) {
        if ( config ) {
            this.enableCaching = config.enableCaching ?? false;
            this.debugging = config.debugging ?? false;
        }
    }

    @debugMethod( "Do you want to start AppCore?" )
    public start(): void {
        console.log("running AppCore");
    }

}

export default AppCore;
