// Lodash
import { split } from "lodash";
import AppCore from './core/AppCore';

// JSON file
import * as jsonData from "../assets/data/data.json";

// // XML file
import xmlData from "../assets/data/data.xml";

// // CSV file
import csvData from "../assets/data/data.csv";



export default function mainAppFunction(): void {
    
    console.log( 'App bundle initialized' );

    // // Testing lodash
    // console.log( 'Lodash test: ', split( 'a-b-c', '-', 2) );
    //
    // // Test JSON data from file
    // console.log( 'Data from JSON: ', jsonData );
    //
    // // // Test XML data from file
    // console.log( 'XML Data: ', xmlData );
    //
    // // // Test CSV data from file
    // console.log( 'CSV Data: ', csvData );



    const appCore = new AppCore();
    appCore.start("New game");

}
