const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;

try {
    const jsonObject = JSON.parse(jsonString);

    jsonObject.list.forEach(item => {
        item.age = parseInt(item.age);
    });

    console.log(jsonObject);
} catch (error) {
    console.error('Error parsing JSON:', error);
}