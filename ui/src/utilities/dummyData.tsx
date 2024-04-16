import moment from "moment";

const DUMMY_DATA = Object.freeze(
    {
    CALENDAR_INITIAL_EVENTS : [
        {title : "1st Interview w/ Alyssa", theme : "PURPLE", startTime:moment("2024-03-19T10:00:00").startOf("day"), endTime:moment("2024-03-19T10:00:00").endOf("day") },
        {title : "2nd Interview w/ Alyssa", theme : "BLUE", startTime:moment("2024-03-21T10:00:00").startOf("day"), endTime:moment("2024-03-21T10:00:00").endOf("day") }, 
        {title : "3rd Interview w/ Alyssa", theme : "GREEN", startTime:moment("2024-03-25T10:00:00").startOf("day"), endTime:moment("2024-03-25T10:00:00").endOf("day") }, 
        {title : "Alyssa Project Submission!", theme : "PINK", startTime:moment("2024-04-15T10:00:00").startOf("day"), endTime:moment("2024-04-12T10:00:00").endOf("day") }, 
        {title : "Alyssa's Birthday", theme : "GREEN", startTime:moment("2024-07-17T10:00:00").startOf("day"), endTime:moment("2024-07-17T10:00:00").endOf("day") },
    ],

    RECENT_TRANSACTIONS : [
        {name : "Alex", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "alex@dashwind.com", location : "Paris", amount : 100, date : moment().endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@dashwind.com", location : "London", amount : 190, date : moment().add(-1, 'd').endOf('day')},
        {name : "John", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "jhon@dashwind.com", location : "Canada", amount : 112, date : moment().add(-1, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "matrix@dashwind.com", location : "Peru", amount : 111, date : moment().add(-1, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/5-image.jpg", email : "virat@dashwind.com", location : "London", amount : 190, date : moment().add(-2, 'd').endOf('day')},
        {name : "Miya", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "miya@dashwind.com", location : "Paris", amount : 230, date : moment().add(-2, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Canada", amount : 331, date : moment().add(-2, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "matrix@dashwind.com", location : "London", amount : 581, date : moment().add(-2, 'd').endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "ereena@dashwind.com", location : "Tokyo", amount : 151, date : moment().add(-2, 'd').endOf('day')},
        {name : "John", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "jhon@dashwind.com", location : "Paris", amount : 91, date : moment().add(-2, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Canada", amount : 161, date : moment().add(-3, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "matrix@dashwind.com", location : "US", amount : 121, date : moment().add(-3, 'd').endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "jhon@dashwind.com", location : "Tokyo", amount : 713, date : moment().add(-3, 'd').endOf('day')},
        {name : "John", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@dashwind.com", location : "London", amount : 217, date : moment().add(-3, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Paris", amount : 117, date : moment().add(-3, 'd').endOf('day')},
        {name : "Miya", avatar : "https://reqres.in/img/faces/7-image.jpg", email : "jhon@dashwind.com", location : "Canada", amount : 612, date : moment().add(-3, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "matrix@dashwind.com", location : "London", amount : 631, date : moment().add(-3, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@dashwind.com", location : "Tokyo", amount : 151, date : moment().add(-3, 'd').endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Paris", amount : 617, date : moment().add(-3, 'd').endOf('day')},    
    ]
}
);

export default DUMMY_DATA;

