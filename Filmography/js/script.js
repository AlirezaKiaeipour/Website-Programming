

async function read_data(file) {
    let x = await fetch(file);
    let y = await x.text();
    myDisplay(y);
  }
  