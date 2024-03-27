# Soul Bench - Insights Bench App
<img src="./client/src/assets/app-name.png" width="800" height="150" />

An online community of conversation, built with the MERN stack, that will allow those with personal, financial or career-related problems to talk them through with others, in either a private or a public channel. :speech_balloon: 

## Table of Contents
- [Description](#description)
- [Collaborators](#collaborators)
- [Installations](#installations)
- [Usage](#usage)
- [Deployed Application](#deployed-applcation)
- [Credits](#credits)
- [License](#license)
- [Contributions](#contributions)

## Description

**The Core Concept**
In a world where electronic connectivity often leads to isolation, it can feel like there's nobody to turn to during life's toughest moments -- especially when family and friends are part of the problem! This is why we find ourselves baring our souls to complete strangers on park benches, at bus stops, or as the laundry churns. What a relief that can be! And although these listeners do not know us well, they can often speak into our lives in ways that are memorable, helpful and wise. 

While Soul Bench does not seek to compete with the place of mental health care professionals, we believe there is also a place for less formal supportive conversational exchange, leading to recognized mental-health benefits (Klerman, Weissman et al.). Our platform is free and pairs those who opt to share one-on-one on a private "bench," with a dedicated lister who lists expertise in one of the three focus areas in which sharers can categorize their problem (personal, financial or career-related). While listeners and sharers are limited to one private conversation at a time, any logged in user can open conversations and contribute comments in the "pavilion" (our public conversation area). Even without login, a visitor can "listen in on"/view what's going on in the pavilion, or engage the resources on our resources page.

No matter what's on your mind or where you're coming from, you'll find a warm, empathetic listener here at Soul Bench who's ready to walk alongside you through life's ups and downs. Take a seat, take a breath, and let's journey together towards brighter days :sunny:

**Techy Talk: The View from the Developers' Den**
Soul Bench was developed by a team of junior full-stack engineers. It was built with react and vite as its front end framework for the elegance these technologies offer in working with single page applications. Node.js, Express.js, MongoDB, Mongoose and GraphQL were chosen as the backend  technologies for their robustness, flexibility and scalability in management of the data structure and data-related operations. Security concerns were addressed by the incorporation of bcrypt for password hashing and JWT for user authentication. Tailwind UI component library and bootstrap grid layout provide the site's responsive design and polished UI, together with some custom CSS and googlefonts (handlee and alegreya-sans). Various other packages from the react environment were imported such as the properties and methods available through react-dom and react-router-dom (eg. useState, useEffect, useNavigate, useMutation, Link, AuthenticationError etc.) with ample use being made of the hooks available in React v6. The team sought to work within a modular file structure for easier maintainability in the future, while limiting the number of page components and making use of reusable components to make different conditional rendering appear on the "pages." 

Reusability of components is one of the attractions of react, but where a single component file was being simultaneously worked on by more than one developer and where all front end files had to interact with graphQl's typeDefs and resolvers at the backend, it proved difficult to stay out of one another's way. The team faced merge conflicts more than once! The acquisition of good git-hubbing habits and the practice with implementing the user authentication piece were probably the greatest learnings during the course of development.

**Standout Features**
Overall Soul Bench meets and in some respects exceeds the scope its development team had envisioned for the MVP. We were not sure we would have the time to develop both a public and a private space, but we felt that both were important in terms of userflow with the public space providing a taste of what the site could offer, hopefully enticing users toward the private bench where the full functionality of the site can be experienced. Rather than depending on AI to generate some fairly milquetoast seeds, the quality of the copy within the 13 pre-seeded conversations among the 30 pre-seeded users  we feel is another thing that makes our project stand out. 

**7 lines for future development**
_Closing a Private Conversation_
In the future, we would like to give more thought to how private conversations are initiated and terminated. Currently only the sharer has the ability to start and end conversations on their bench, but since the listener can also only be in one private conversation at a time, there is the potential for listener accounts to essentially be hijacked in the case of a sharer who becomes inactive on the site or wishes to tie their listener to them forever long after the listener feels the conversation has run its useful course. A good solution would be to have a "close conversation" button appear for the listener also if there have been no comments added to the conversation object for a period of 2 calendar days from the last comment addition.

_Forum Moderation & feedback on users from other users_
 Currently our legal coverage is provided by the disclaimer that sharers and listeners agree to when signing up, but, to ensure a better UX for all, it is probably necessary in a site of this kind of have some kind of moderator. Hopefully we will have time to develop the functionality for editing of comments, conversation texts and conversation titles by the user who created them for the MVP, but one or two people in a moderatorial role also having the power to  delete comments or users if they became inappropriate, would be a good addition as a safeguard against trolls who might pollute the forum. Some endorsement system of the listener by the sharer and some flagging system of the sharer by the listener could further enhance trust and accountability within the community.

 _Tipping Platform_ 
 While one of the goals of the app is to "democratize wisdom" and make the "mental health benefits" of "supportive conversational exchange" more accessible to those who can't afford to access professional counselling, without in any way suggesting that our service is a a substitute for professional counselling expertise, we also want to honour the unofficial expertise and additional commitment the site asks of its listeners. Perhaps the integration of a tipping platform at the end of a private conversation, implemented with Stripe, would strike the right balance. It would keep Soul Bench still essentially free (tipping would always be voluntary) while asking sharers to reflect on the value of the interaction, and listeners to feel appreciated for the service they are giving.

 _User Profile_ 
 The team has also discussed the creation of a user profile, hosted either on the My Bench page, or on a separate Profile page as a line for future development. Users should be able to update and recover their passwords and perhaps share a 100 word self-introduction and upload a photo or avatar. If such data were stored on every user, it would be a simple thing to call up the listener's profile by id and display it for the sharer and vice versa while a private conversation between them is underway.

 _Past Conversations History_ 
 It would also be nice, when a private conversation is closed, for it to be added to a user's closedConversations array. The titles of these past conversations could then be displayed on the MyBench page, using a UI similar to the homepage. Clicking on any of them would allow a user to review a verbatim transcript of past conversations (how often have you wanted to do that in your face-to-face interactions with people)! Having a conversation history to display on the MyBench page, regardless of whether the user is currently in a private conversation, would also make the My Bench page UI more interesting for the listener, which is currently pretty vacant if there is no private conversation to render. Eventually we may opt for a system where a sharer's private conversations are limited to one at a time, but there is no such limit for the listener. Actually the only reason the team did not implement this functionality from the beginning was because we felt it was beyond MVP, basically requiring the design of two distinct UIs for the MyBench page.

 _Reactions to Comments_ 
 For the conversations in the public forum, most social media interfaces allow users to react to the comments of others with emojis even if they don't want to leave a comment in words. This would require another nested schema in our data structure for reactions on comments, but it would be an enhancement feature for future iterations.

 _User notifications_ 
 Ultimately integrating notifications for a listener when matching has placed them into a private conversation or when an ongoing private conversation has received comments by the other party would reduce lag-time in the conversational back-and-forth. People sharing on this site are not supposed to be in crisis, but still it is part of feeling you are heard to receive a timely response from your listener.

## Collaborators
- [André Endique](https://github.com/ae-andre)
- [Jasmine Lee](https://github.com/Jasmineleeyt)
- [Karla Wubbenhorst](https://github.com/kwubbenhorst)
- [Tiffany Chan](https://github.com/tchan128)


## Installations
:heavy_check_mark: No installation is needed if accessing through the deployed application! [Click here to go to the deployed application section](#deployed-application)

:point_right: To run this locally, please make sure you have [Node.js](https://nodejs.org/en) and [MongoDB](https://www.mongodb.com/) installed.

## Usage

Upon landing on the page, users will see a brief description of what 'Soul Bench' is about. As they scroll down the homepage, they'll discover hot topics that other users have recently been discussing. While users can view these discussions, they'll need to be logged in if they wish to join the conversation. Clickables for visitors are just the public conversation titles which will open up the full conversation in the top section of the page. If they attempt to start a new conversation or click into the text area for leaving a comment on an existing one they will be redirected to the login page.

Login, requiring just the username and password fields, is the default view on the login page, but by clicking the 'Sign Up' button located under the 'Login' interface, users can choose between two roles: Sharer or Listener. Depending on the role selected, users will be prompted to fill out a different form (the main difference being that the user's form asks them to select their expertise from a drop down menu). Once signed up, users can then go either to the Home page or to the newly rendered navigation option "My Bench." In terms of the user authentication token, it is given at login or signup and remains active for 2 hours.

If users return to the Home page after login, they can now click the button to start a new public conversation and see a form appear in the upper section. It will have them enter a title and a brief header text for the conversation thread. They will also select what kind of problem it is (financial, personal or career-related) from a drop-down menu. The purpose of this categorization on the Home page is just so the conversation title can appear under the correct column in the conversations list, but in the creation of a private conversation, the categorization will have the more important role of matching listeners who have declared certain expertise with sharers who desire these qualities for the particular sort of problem they have.

On the My Bench page, sharers and listeners will be greeted to the view of their one private conversation opened up, if in fact they have one. If they are not in a private conversation currently, sharers can initiate one by clicking the '+' button. The form they see will be similar to the form for starting a public conversation, but the logic for handling a form submit is different, as it involves the matching step for the private conversation and the updating of more fields in the database. For users signed up as Listeners, the 'My Bench' tab will display a message if there's currently no paired Sharer -- a rather minimalistic view, but on the private bench, the initiative must logically belong to the sharer.

To update their password, users can simply click on the 'Profile' button, enter their username, current password, and the new password. Beyond MVP the team would like to develop a feature where the username is assigned at signup. In the pre-seeded data, all listeners are a variety of owl (in respect of their wisdom): eg. confident_owl, majestic_owl, kindly_owl, handsome_owl, etc. all all sharer usernames are in the form adjective_animal type (eg. jubilant_giraffe, agnostic_elephant, quirky_monkey, wandering_hedgehog). One of the community values is anonymity and this system ensures it while also providing a clue to whether the speaker in the public forum is a listener or a regular user.  There is an argument for allowing a user to change their username (what if they get assigned to an adjective or an animal they don't feel suits them?) but there is also an argument against it (while all users are anonymous personalities will begin to emerge within the social forum, recognizable by their onscreen names. It might be disorienting for users to change their names once they had established a persona in the mind of other users). Of course there is nothing preventing a user creating more than one account on the site. If, as a listener, they get stuck in a private conversation, they don't like, they can always create another profile, or if they feel they have expertise they want to offer in more than one category, or if they want to be involved in more than one private conversation at a time.

The functionality of the resources page is pretty basic and is available to all users and site visitors at all times. It merely consists in a collection of clickable links leading to outside resources specially curated by the Soul Bench development team.

## Deployed Application

Click here to explore Soul Bench! :point_right: [Soul Bench](https://soul-bench-3b55e6a68ef1.herokuapp.com/)

![Screenshot of a deployed app](./client/src/assets/soul-bench.png)

## Credits

The creation of Soul Bench was generally inspired by the research in the psychotherapeutic community into IPT (interpersonal therapy), pioneered by Gerald Klerman and Myrna Weissman in the 1970s and employed as one of the most popular and effective modern approaches for treating the twin nemeses of depression and anxiety (mood disorders that affect 25% of the Canadian population) as well as grief, interpersonal role disputes, role transition and interpersonal deficits. IPT acknowledges the social nature of human beings and the importance of a perceived role in identity construction. More broadly the project was inspired by Victor Frankl's classic _Man's Search for Meaning_. Frankl as one of the ground-breaking figures in the talk-therapy movement, coined the term logotherapy for his distinctive approach which proposes that experiences of trauma and trouble can be integrated as more than psychic wounds if they can be interpreted within a wider frame of meaning and the exercise of will. Malcolm Gladwell's book _Talking with Strangers_ was also an inspiration, though its focus is more on the deleterious effects that ensue when a culture does not provide settings and cultivate practices where connective talk between strangers is possible. 

In settling on the "bench" as a metaphor for a setting where two people can meet casually, often anonymously, for transformational conversations of depth and meaning, the development team was drawing on what amounts to a "bench movement" afoot in contemporary culture. From the "buddy benches" that are popular in schools as a measure to combat social exclusion and bullying, to the "Happy to Chat" benches that are popping up all the way from Wales to Dartmouth, Nova Scotia, to the "Afterlife" benches that Netflix has sponsored to encourage conversations about grief and suicide prevention (an outgrowth from the Netflix series Afterlife starring Ricky Gervais), to the "Nobody There" bench which delivers a recorded inspiration quote to the solitary bench-sitter, individuals and institutions are waking up to the power of bench-encounters as a quasi-spiritual experience. Soul Bench features original artwork by Jasmine Lee, one of our development team, who keeps her talent  distributed across both halves of her brain.      

## License
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributions

The MVP for this project is delivered with several avenues for future iterations clearly in view. These have been detailed in the open issues. If you would like to contribute, please contact one of the development team directly at the links given above in the collaborators section or in the footer of the app. The team is also intensely interested in user feedback to guide the app's evolution. Please reach out with any questions or suggestions based on your experience with using the app.   


