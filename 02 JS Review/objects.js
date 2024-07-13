//           properties | methods
// user_obj | email     |  login
//          | username  |  logout
//          |  gender   |

// const blogs = [
//   { title: "Millard Ayo", likes: 30 },
//   { title: " ITV", likes: 40 },
// ];

// console.log(blogs);

let user = {
  name: "crystal",
  age: "30",
  email: "crystal@abc.co.tz",
  location: "Dodoma",
  // blogs: ["Millard Ayo", "ITV", "TBC"],
  blogs: [
    { title: "Millard Ayo", likes: 30 },
    { title: " ITV", likes: 40 },
  ],
  login: function () {
    console.log("The user logged in");
  },

  // logout: function ()
  logout() {
    console.log("The user logged out");
  },

  logBlogs: function () {
    //in-order to access blog then use this keyword
    console.log("This user has access to the followings blogs: ");
    this.blogs.forEach((blogs) => {
      console.log(blogs.title, blogs.likes);
    });
  },
};

user.login();
user.logout();
user.logBlogs();
console.log(user);
console.log(user.name);

// Math Object
console.log(Math);
console.log(Math.E);
console.log(Math.PI);

const area = 7.1;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));
