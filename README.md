# Master of the Universe
Master of the Universe is an interactive site that turns art into a game. By selecting the correct combination of images, the user is greeted with either a win screen with vibrant colours designed to bring joy, or a lose screen that asks them to try again. In this way, the user is given the chance to build up the drawing as they like.

![Site view across devices](assets/images/images-readme/responsive-design.png)

The Speakers timer site is live, the links can be found [HERE](https://hypergeek-dev.github.io/Speakers-timer/)

## Table of Contents
+ [UX](#ux "UX")
  + [Site Purpose](#site-purpose "Site Purpose")
  + [Site Goal](#site-goal "Site Goal")
  + [Audience](#audience "Audience")
  + [Communication](#communication "Communication")
  + [Current User Goals](#current-user-goals "Current User Goals")
  + [New User Goals](#new-user-goals "New User Goals")
+ [Design](#design "Design")
  + [Colour Scheme](#colour-scheme "Colour Scheme")
  + [Typography](#typography "Typography")
  + [Imagery](#imagery "Imagery")
+ [Features](#features "Features")
  + [Existing Features](#existing-features "Existing Features")
+ [Testing](#testing "Testing")
  + [Validator Testing](#validator-testing "Validator Testing")
  + [Unfixed Bugs](#unfixed-bugs "Unfixed Bugs")
+ [Technologies Used](#technologies-used "Technologies Used")
  + [Main Languages Used](#main-languages-used "Main Languages Used")
  + [Frameworks, Libraries & Programs Used](#frameworks-libraries-programs-used "Frameworks, Libraries & Programs Used")
+ [Deployment](#deployment "Deployment")
+ [Credits](#credits "Credits")
  + [Content](#content "Content")
  + [Media](#media "Media")

## UX

### Site Purpose:
This code is for a timer that is designed to assist virtual meetings in managing the length of individual speeches. The timer is set up with input fields for hours, minutes, and seconds. The user can input the desired length of the speech, and then start the timer. Once the timer is started, the user can pause and reset the timer as needed.

### Site Goal:
To engage the users interests with vibrant design & fun images, and to keep them coming back to try again. 

### Audience:
Anyone & everyone with time to spare. The ideal user age is between 15-30 years of age.

### Communication:
With bold text & clearly defined buttons, the instructions of the game become clear upon visiting the site. However for those who need a little more guidance, an instructions window has also been added, to load upon request.

### Current User Goals:
To keep the user interested & engaged, trying again & again to get the correct combination of switches. With three switches, & three positions for each switch, the number of possible combinations is 27. 

### New User Goals:
To become instantly engaged with the design of the site, and feel intrigued to play along.

### Future Goals:
To add additional interactive playing fields so that the user can choose from a number of different scenarios. As well as to add the option to increase the level of difficulty.

## Design

### Wireframes:
![Desktop wireframe](assets/images/images-readme/wireframe-fullscreen.png)
![Smartphone wireframe](assets/images/images-readme/wireframe-smartphone.png)

### Colour Scheme:
Two colours were used in the creation of this site. The green tone matches the same green used in the default image of the planet Earth, and was used to tie the imagery to the text. A dark blue was also used, and chosen to mimic the imagined hue of the universe. The rest of the colours come from the images themselves, with additional colour being thrown at the user in a beautiful rainbow upon game win.
![Colour Palette](assets/images/images-readme/colour-palette.png)

### Typography:
All fonts were obtained from the Google Fonts library. I chose the following three fonts for the page:
1. Rubik Moonrocks - This is the main heading font, and it resembles the universe. It felt fitting to the design.
2. Kanit - for the tagline. I wanted it to be easy to read.
3. Grape Nuts - for the labels of the toggle switches & footer text. As it looks handwritten, it fits with the feel of the doodle/drawing that can be manipulated. It has also been used in the win/lose messages.
4. Rubik Wet Paint - To give an eerie feel to the submit & reset buttons.

### Imagery:
All images used were created by me, and styled to give it the feel of an interactive colouring book.

## Features

### Existing Features:

#### Landing Page:
![Landing Page](assets/images/images-readme/landing-page.png)


### Features Left to Implement

## Testing
Initial testing revealed a bug whereby you could press play several times and the countdown would then count irratic. I solved this by using an eventlistener.
That has been the only issue in Javascript. The issues that took most of my time was styling in CSS. 

### Validator Testing
- html files pass through the [W3C validator](https://validator.w3.org/) with no issues found.

![W3C validator message](assets/images/images-readme/validator-html.png)

- CSS files pass through the [Jigsaw validator](https://jigsaw.w3.org/css-validator/) with no issues found.
<p>
  <a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
         src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
         alt="Valid CSS!" />
  </a>
</p>


![Jigsaw validator message](assets/images/images-readme/validator-css.png)

- JS files pass through [JSHint](https://jshint.com/) with no issues found.

![JSHint overview](assets/images/images-readme/validator-js.png)

- page has an excellent Accessibility rating in Lighthouse

![Accessibility score](assets/images/images-readme/lighthouse-score.png)

- Tested the site opens in Brave, Chrome & Safari without issues.
- All links open to external pages as intended.

### Unfixed Bugs

There are no unfixed errors. 

## Technologies Used
### Main Languages Used
- HTML5
- CSS3
- Javascript

### Frameworks, Libraries & Programs Used
- Google Fonts - for the font families: 
- Font Awesome - to add icons to the social links in the footer element.
- GitPod - to create my html files & styling sheet before pushing the project to Github.
- GitHub - to store my repository for submission.
- Balsamiq - were used to create mockups of the project prior to starting.
- Am I Responsive? - to ensure the project looked good across all devices.
- Favicon - to provide the code & image for the icon in the tab bar.

## Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
- The live link can be found [HERE - Speakers Timer](https://hypergeek-dev.github.io/Speakers-timer/)

## Credits
I like to thank Martina Terlević (https://www.linkedin.com/in/martinaterlevic/)
### Content
All written content is created by me

The buttons were found on
https://dev.to/webdeasy/top-20-css-buttons-animations-f41
and edited to own purpose

### Media
The verbal notification is created using
Text to speech, using this site:
https://speechgen.io/

The wallpaper was found on
https://wallpapercave.com/

- All artwork created by me.