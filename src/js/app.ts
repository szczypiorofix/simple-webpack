// Lodash
import { split } from "lodash";

// JSON file
import * as jsonData from "../assets/data/data.json";

// // XML file
import xmlData from "../assets/data/data.xml";

// // CSV file
import csvData from "../assets/data/data.csv";



function ResizeWindow() {
    console.log("Resize: " + window.innerWidth + ":" + window.innerHeight);
}




export default function mainAppFunction(): void {
    
    console.log("App bundle initialized");

    // Testing lodash
    console.log("Lodash test: ", split("a-b-c", "-", 2));

    const d: number = 1;

    console.log( typeof d );

    // Test JSON data from file
    console.log("Data from JSON: ", jsonData );

    // // Test XML data from file
    console.log("XML Data: ", xmlData);

    // // Test CSV data from file
    console.log("CSV Data: ", csvData);

    // Adding custom JS function, e.g. window resize event listener
    window.addEventListener("resize", ResizeWindow);

}
