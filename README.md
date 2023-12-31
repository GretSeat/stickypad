# StickyPad

StickyPad is a full stack web application where you can store the notes you come up with on a daily basis.
What's more fun than sticky notes?

You can sign up, log in, add notes, retrieve notes, delete notes, log out.

**Link to project:** https://stickypad.netlify.app/

### Landing Page

![Sticky Pad Landing Page](/public/imgs/main.png)

### Login Page

![Sticky Pad Login Page](/public/imgs/login.png)

### Sign Up Page

![Sticky Pad Sign Up Page](/public/imgs/signup.png)

### Notes Page - With "Add a Note" Hidden

![Sticky Pad Page Closed](/public/imgs/notesClosed.png)

### Notes Page - With "Add a Note" Visible

![Sticky Pad Page Open](/public/imgs/notesOpen.png)

## How It's Made:

**Tech used:** MongoDB, mongoose, Express, EJS, Node.js, Passport, bcrypt, dotenv, morgan, validator, and Bootstrap

## Optimizations

- [x] ~~It could definitely look better, in the future I'd like to clean up the design of the page to make it more appealing.~~[^1]
- [ ] Adding different color sticky notes to your project.[^2]
- [ ] Grouping Sticky Notes Together based on their importance, or user preference.[^3]
- [ ] Switching out EJS for React.[^4]
- [ ] Mobile Responsive[^5]
- [ ] (Further Down the Road) Clicking and Dragging Notes to make the entire area a place to "paste" their notes.[^6]

## Lessons Learned:

- While going through this application I learned more about Bootstrap, and how to make things look nice.
- Adding Authentication to Applications, so users can login, and signup for the website using their own user names and passwords.
- Adding Encryption to Passwords for User Safety and Protection
- Adding/Retrieving Users, Passwords, and Notes from the MongoDB database

[^1]: I need to continue to tweak Bootstrap, as well as the CSS to give it a professional appearance.
[^2]: I'd love to make it so you can choose which colors you want to add to your sticky notes, to make them more personal.
[^3]: One of the things I want to introduce is the ability to add in "stacks" of sticky notes so the user can actually have a sticky "pad", and group their notes based on their importance, or their own preferences.
[^4]: When I have time I'd love to switch everything from EJS into React.
[^5]: This is going along with [^1] about making the entire application mobile friendly.
[^6]: Eventually I'd love to make the entire project into a freeform type of environment so you can click and drag your notes around the area, so you will have full range of creativity.
