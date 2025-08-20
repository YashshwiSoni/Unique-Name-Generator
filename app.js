const abttn = document.getElementById("clickFind");
const bbttn = document.getElementById("clickReset");
const cml = document.getElementById("mlCheck");
const dfml = document.getElementById("fmlCheck");
const eResult = document.getElementById("result");
const falpha = document.querySelector(".alphaselect");

const male = ["Aarav", "Aditya", "Amit", "Anand", "Arjun", "Ashwin", "Ayaan", "Abhay", "Akhil", "Aniket",
 "Benjamin", "Brandon", "Bryan", "Blake", "Bruce", "Bobby", "Barry", "Brent", "Brett", "Billy",
"Caleb", "Cameron", "Carl", "Carlos", "Carter", "Charles", "Chris", "Christian", "Clayton", "Connor",
 "Daniel", "David", "Dylan", "Derek", "Dominic", "Dean", "Damian", "Dustin", "Douglas", "Dwayne",
"Ethan", "Edward", "Eli", "Eric", "Ezekiel", "Edgar", "Emmanuel", "Elias", "Everett", "Eugene",
"Frank", "Felix", "Francis", "Floyd", "Fletcher", "Finn", "Freddie", "Faris", "Fabrice", "Faizan",
"George", "Gavin", "Graham", "Gabriel", "Gerald", "Griffin", "Giovanni", "Gideon", "Gino", "Gustavo",
"Henry", "Harrison", "Hector", "Harvey", "Howard", "Hudson", "Hugh", "Hamza", "Hayden", "Harold",
"Ian", "Isaac", "Ibrahim", "Ishaan", "Imran", "Iker", "Irvin", "Ignatius", "Izaiah", "Ismael",
"James", "Jack", "Jacob", "Jason", "Jonathan", "Jordan", "Jasper", "Joel", "Jaxon", "Jonas",
"Kevin", "Kyle", "Keith", "Kurt", "Kaden", "Kieran", "Kenny", "Khalid", "Kobe", "Kane",
"Liam", "Logan", "Lucas", "Leon", "Louis", "Levi", "Luther", "Lance", "Lionel", "Lorenzo",
"Michael", "Matthew", "Mark", "Martin", "Miles", "Mason", "Malik", "Mohammed", "Milo", "Max",
"Nathan", "Noah", "Nicholas", "Nolan", "Neil", "Nelson", "Nash", "Nasir", "Nico", "Nigel",
"Oliver", "Owen", "Oscar", "Orlando", "Omari", "Omar", "Otis", "Odin", "Oren", "Oakley",
"Paul", "Peter", "Philip", "Preston", "Parker", "Porter", "Pranav", "Perry", "Percy", "Pablo",
"Quentin", "Quincy", "Quinn", "Quinlan", "Quade", "Qasim", "Qamar", "Quenton", "Quest", "Quadeem",
"Robert", "Ryan", "Ronald", "Rohan", "Raymond", "Riley", "Ryder", "Reuben", "Raphael", "Randy",
"Samuel", "Simon", "Scott", "Sean", "Seth", "Stephen", "Sahil", "Santiago", "Shawn", "Skyler",
"Thomas", "Tyler", "Tristan", "Tobias", "Tariq", "Troy", "Tanner", "Trevor", "Theo", "Timothy",
"Umar", "Ulysses", "Usman", "Ulrich", "Urijah", "Uzziah", "Umesh", "Ulan", "Urban", "Uzair",
"Victor", "Vincent", "Vikram", "Vance", "Vladimir", "Virgil", "Vihaan", "Vishal", "Valentino", "Vernon",
"William", "Wesley", "Wyatt", "Walter", "Warren", "Wayne", "Wade", "Wilfred", "Wilson", "Walker",
"Xavier", "Xander", "Xzavier", "Xavi", "Xeno", "Xayden", "Xenon", "Xuan", "Xerxes", "Xolani",
"Yusuf", "Yash", "Yosef", "Yannick", "Yasir", "Yehuda", "Yazan", "Yuki", "Yarden", "Yoel",
"Zachary", "Zane", "Zaid", "Zion", "Zeke", "Zander", "Zubair", "Zahir", "Zeeshan", "Zaiden"]

const female = ["Aaliyah", "Abigail", "Adriana", "Alicia", "Alina", "Amanda", "Amelia", "Angela", "Anita", "Ava",
"Barbara", "Beatrice", "Belinda", "Bella", "Bernice", "Bethany", "Bianca", "Blair", "Bonnie", "Brenda",
"Caitlin", "Camila", "Candice", "Carla", "Carmen", "Caroline", "Cassandra", "Catherine", "Charlotte", "Chloe",
"Daisy", "Dakota", "Danielle", "Darlene", "Deborah", "Delilah", "Denise", "Diana", "Diane", "Donna",
"Edith", "Eileen", "Elaine", "Elena", "Eliza", "Elizabeth", "Ella", "Ellen", "Emily", "Emma",
"Faith", "Fatima", "Felicia", "Fiona", "Flora", "Frances", "Francine", "Freya", "Farah", "Faye",
"Gabriella", "Gail", "Gemma", "Georgia", "Geraldine", "Gina", "Giselle", "Gloria", "Grace", "Greta",
"Hailey", "Hannah", "Harper", "Hazel", "Heather", "Heidi", "Helen", "Helena", "Holly", "Hope",
"Iesha", "Iliana", "Imani", "India", "Ingrid", "Irene", "Iris", "Isabel", "Isabella", "Ivana",
"Jacqueline", "Jade", "Jamie", "Jane", "Jasmine", "Jean", "Jennifer", "Jessica", "Jillian", "Julia",
"Kaitlyn", "Kara", "Karen", "Karina", "Karla", "Katherine", "Kathleen", "Katie", "Kayla", "Kimberly",
"Lana", "Laura", "Lauren", "Leah", "Leslie", "Lila", "Lillian", "Lily", "Linda", "Lucy",
"Mackenzie", "Madeline", "Maggie", "Maria", "Marilyn", "Marissa", "Maya", "Melanie", "Mia", "Michelle",
"Nadia", "Nancy", "Naomi", "Natalie", "Natasha", "Nellie", "Nicole", "Nina", "Nora", "Nyla",
"Olga", "Olive", "Olivia", "Opal", "Ophelia", "Oriana", "Oksana", "Octavia", "Oona", "Orla",
"Pamela", "Patricia", "Paula", "Paulina", "Payal", "Penelope", "Penny", "Phoebe", "Piper", "Priscilla",
"Queen", "Queenie", "Quella", "Quiana", "Quincy", "Querida", "Quinley", "Quinta", "Quintessa", "Quorra",
"Rachel", "Raquel", "Rebecca", "Regina", "Renee", "Riley", "Rita", "Roberta", "Rosa", "Ruby",
"Sabrina", "Samantha", "Sandra", "Sara", "Sarah", "Savannah", "Scarlett", "Selena", "Sharon", "Sophia",
"Tabitha", "Talia", "Tamara", "Tanya", "Tara", "Taylor", "Teresa", "Tessa", "Thelma", "Tina",
"Ula", "Uma", "Umber", "Unity", "Unique", "Ursula", "Urvashi", "Ulani", "Ume", "Utkarsha",
"Valentina", "Valerie", "Vanessa", "Veda", "Velma", "Veronica", "Vicki", "Victoria", "Vienna", "Violet",
"Wanda", "Waverly", "Wendy", "Whitney", "Wilhelmina", "Wilma", "Winifred", "Winter", "Winnie", "Wren",
"Xandra", "Xenia", "Ximena", "Xiomara", "Xyla", "Xylia", "Xabrina", "Xylaine", "Xaria", "Xaviera",
"Yara", "Yasmin", "Yasmine", "Yelena", "Yesenia", "Yoko", "Yolanda", "Yoselin", "Yuna", "Yvette",
"Zahara", "Zainab", "Zara", "Zaria", "Zelda", "Zelina", "Zena", "Zendaya", "Zia", "Zoe",

]


abttn.addEventListener("click", function(){
 let name = [];
 const selectltr = falpha.value;

  if (cml.checked){
   name = male;
   
  }else if (dfml.checked){
   name = female;
  } else{
    alert("Please select Male or Female.")
    return;
  }

  if(selectltr && ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].includes(selectltr)){
    name =name.filter(function(nm){
    return nm.startsWith(selectltr);
    });
  }else{
    alert("Please select Name's startsing alphabet.") ;
    return;
  }
 
    
  if (name.length === 0){
    eResult.textContent = "No names found for the selected criteria.";
    return;
  }
    
    const index = Math.floor(Math.random() *name.length);
    eResult.textContent = name[index];

});

bbttn.addEventListener("click", function(){
 dfml.checked = false;
 cml.checked = false;
 eResult.textContent = "";
 falpha.value = "";

});


cml.addEventListener("change", function () {
    if (cml.checked) {
        dfml.checked = false;
    }
});

dfml.addEventListener("change", function () {
    if (dfml.checked) {
        cml.checked = false;
    }
});
