const person = {
    name: "Kim Tae-yeon",
    age: 18,
    group: "SNSD"
  };
  
  const introduce = (person) => {
    return (
      `${person.name} made her first debut as member of ${person.group} when she was ${person.age} years old.`
    );
  }
  
  console.log(introduce(person));