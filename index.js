'use strict';
var Alexa = require('alexa-sdk');

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Johan Cruyff Speak";
var GET_PRE_MESSAGE = "";
var HELP_MESSAGE = "You can say tell me a quote, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
// Johan's Quotes
//=========================================================================================================================================
var quotes = [
    "Football is a game of mistakes. Whoever makes the fewest mistakes wins",
    "Speed is often confused with insight. When I start running earlier than the others, I appear faster.",
    "Coincidence is logical.",
    "Football is about having the best offensive play possible. I always like to play offensive football, and nobody will convince me otherwise.",
    "Every disadvantage has its advantage.",
    "I'm not religious. In Spain all 22 players make the sign of the cross before they enter the pitch. If it works all matches must therefore end in a draw.",
    "Italians can not beat us, but we can certainly lose against them.",
    "To win you have to score one more goal than your opponent.",
    "Before I make a mistake, I don't make that mistake.",
    "My foundation now has some 120 football pitches laid out for children, a lot of them immigrants. We live in a multicultural society.",
    "Choose the best player for every position, and you’ll end up not with a strong XI, but with 11 strong 1’s.",
    "Technique is not being able to juggle a ball 1000 times. Anyone can do that by practicing. Then you can work in the circus. Technique is passing the ball with one touch, with the right speed, at the right foot of your team mate.",
    "Someone who has juggled the ball in the air during a game, after which four defenders of the opponent get the time to run back, that’s the player people think is great. I say he has to go to a circus.",
    "I always threw the ball in, because then if I got the ball back, I was the only player unmarked.",
    "I’m ex-player, ex-technical director, ex-coach, ex-manager, ex-honorary president. A nice list that once again shows that everything comes to an end.",
    "Players that aren’t true leaders but try to be, always bash other players after a mistake. True leaders on the pitch already assume others will make mistakes.",
    "What is speed? The sports press often confuses speed with insight. See, if I start running slightly earlier than someone else, I seem faster.",
    "If I wanted you to understand it, I would have explained it better.",
    "Playing football is very simple, but playing simple football is the hardest thing there is.",
    "I find it terrible when talents are rejected based on computer stats. Based on the criteria at Ajax now I would have been rejected. When I was 15, I couldn’t kick a ball 15 meters with my left and maybe 20 with my right. My qualities technique and vision, are not detectable by a computer.",
    "There are very few players who know what to do when they’re not marked. So sometimes you tell a player: that attacker is very good, but don’t mark him.",
    "Quality without results is pointless. Results without quality is boring.",
    "Players today can only shoot with their laces. I could shoot with the inside, laces, and outside of both feet. In other words, I was six times better than today’s players.",
    "Surviving the first round is never my aim. Ideally, I’d be in one group with Brazil, Argentina and Germany. Then I’d have lost two rivals after the first round. That’s how I think. Idealisitic.",
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('AskQuoteIntent');
    },
    'AskQuoteIntent': function () {
        var factIndex = Math.floor(Math.random() * quotes.length);
        var randomQuote = quotes[factIndex];
        var speechOutput = GET_PRE_MESSAGE + randomQuote;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomQuote)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};