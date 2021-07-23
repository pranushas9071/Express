interface Details {
  name: string;
  id: number;
}

const user: Details = {
  id: 1,
  name: "Pranusha",
};

class User {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    (this.name = name), (this.id = id);
  }
}

const user1: Details = new User("Pranusha", 1);

interface intro {
  name: string;
  place: string;
}

console.log(user1);

const greet = (person: intro): string => {
  return `Good evening all, I am ${person.name} from ${person.place}`;
};

const person: intro = {
  name: "Pranusha",
  place: "Coimbatore",
};

const res: string = greet(person);
console.log(res);
