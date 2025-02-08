import { startMenu } from "./src/menus/menu.js";

const main = async () => {

  while (true) {

    const obj = await startMenu();

    if (obj == "exit")
      return;

    if (typeof obj == "object") {

      console.clear();

      //menupersonagem
      
    }

  }

};

main();