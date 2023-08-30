const xml2js = require('xml2js');

const xmlData = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new xml2js.Parser({ explicitArray: false });

parser.parseString(xmlData, (err, result) => {
    if (err) {
        console.error('Error parsing XML:', err);
        return;
    }

    const jsObject = {
        list: result.list.student.map(student => {
            const { first, second } = student.name;
            return {
                name: `${first} ${second}`,
                age: parseInt(student.age),
                prof: student.prof,
                lang: student.name.$.lang
            };
        })
    };

    console.log(jsObject);
});