let jokeArray = 
[
`Dark humor is like food, not everyone gets it.`,

`A guy walks into a bar and asks for 1.4 root beers.
The bartender says "I'll have to charge you extra, that's a root beer float".
The guy says "In that case, better make it a double."`,

`My husband and I were happy for 20 years. And then we met.`,

`My grandfather says I'm too reliant on technology.
I called him a hypocrite and unplugged his life support.`,

`There are only 10 kinds of people in this world: those who know binary and those who don't.`,

`Never date a baker. They're too kneady.`,

`My girlfriend's dog died, so I tried to cheer her up by getting her an identical one. It just made her more upset. She screamed at me, "What am I supposed to do with two dead dogs?"`,

`Have a great weekend!
I hope your code behaves the same on Monday as it did on Friday.`,

`My wife and I have reached the difficult decision that we do not want children.
If anybody does, please just send me your contact details and we can drop them off tomorrow.`,

`Today I learned that changing random stuff until your program works is "hacky" and a "bad coding practice" but if you do it fast enough it's "Machine Learning" and pays 4x your current salary.`,
`Why is Putin still invading Ukraine?
Once he Putin, He don't pull out.`,
`Why is dark spelled with a 'k' and not a 'c'?
You can't see in the dark.`,
`What do you call intelligent people in the U.S.?
Tourists.`,
`How is a religion like a p#nis?
It's fine to have one, it's fine not to have one. The problems start when you start shoving it down children's throats.`,
`Do you know that if you tell a girl she's beautiful once, she won't believe you, but if you tell the same girl that she's fat once, she'll always remember it?
That's because elephants never forget.`,
`Why do adults never understand school shooting jokes?
Guess they're aimed at a younger audience.`,
`Do you know the best thing about killing a hooker?
Not only do you get your money back, but, the second hour is free.`,
];

let randomJoke;


function getRandomInt(n)
{
    n=jokeArray.length
    return Math.floor(Math.random() *(n - 1));
}

let jokes_generator =  document.getElementById("joke");
jokes_generator.addEventListener('click',function (){
    for (let i = 0; i < jokeArray.length; i++) {
        randomJoke = getRandomInt();
    }
    document.getElementById("joke-output").innerHTML = jokeArray[randomJoke];
})