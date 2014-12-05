Get On
======

### Description

A webapp for notifying your friends about when you're available to play online team games.


### The Team

* Jinsu Choi
* Kevin Chen

### Demo Link: http://youtu.be/NgmlBeqWCR0

### Idea
A service that keeps track of when friends are online, allowing groups to be quickly notified when everyone is available to play a match.

### Models

Model and Fields
* User:
name, e-mail, password, username, friends, favorite games, events
* Game:
name, game icon, game screenshot
* Event:
users to be notified, time when it was notified, time when it will expire (and self-destruct)


### Views

View, URI, Description:

* sign_in :
devise/users#sign_in; default devise sign_in page, incorporated into designed static HTML

* sign_up :
devise/users#sign_up; default devise sign_up page, incorporated into designed static HTML

* home/index :
home#index; dashboard page that the user is redirected into if signed in


### Controllers

* Default devise controller

* RegistrationsController: for custom devise user model with additional fields

* HomeController (Dashboard)

### Features

* User can sign up and has a chance to add games onto his/her favorite game list

* User can login and access the dashboard; dashboard will immediately display which games are available for playing with friends

* User can choose a game to play and notify all of its friend users

### Division of Labor

* Jinsu: Made static HTMLs for login dialog, signup page, and dashboard; modified devise default user model - online scope included; incorporated static HTMLs into default devise views and proper routings done; HomeController and RegistrationController made for proper user signin/up functionality

* Kevin: Made static HTML for landing page, came up with GetOn logo, created game, event, and friendship model; made proper incorporation with external gems and functionalities
