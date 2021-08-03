// (horseShoe.codePointAt(0));
// returns code to input into characterScript (aka codePointAt)

const SCRIPTS = require("./scripts");


//   Given char code, returns script
function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }


  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }

  let dominantDirection = (text) => {
    // returns {name: X, count: Y} objects in an array
    // with each char in the text of that script incrementing count
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let majorityName = scripts.reduce((current, next) => current.count > next.count ? current : next).name;

    for (let script of SCRIPTS) {
      if (script.name == majorityName) {
        return script.direction;
      };
    };
  };

  console.log(dominantDirection("Hello!"));