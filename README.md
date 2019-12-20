# Project 3 - Star Trek API w/ React Front-end
#### A Graphical '[LCARS](https://memory-alpha.fandom.com/wiki/Library_Computer_Access_and_Retrieval_System)'-style UI for accessing an API covering Characters, Ships, Species, and Ranks from Star Trek eras TNG (The Next Generation) to DS9 (Deep Space 9).

---

### Table of Contents
#### Front-end
- [Wireframes](#wireframes)
- [Technologies Used](#fe-tech)
- [Next Steps](#fe-next)

#### Back-end
- [Back-end README]()

---

## Front-end
<a name='wireframes'/>

### Wireframes
Character list and detail before settling on 'LCARS'-style design.
![Wireframe 1](https://i.ibb.co/S0k5zKm/wf-1.jpg)

Starting to play with LCARS shapes and possible components.
![Wireframe 2](https://i.ibb.co/mT1TcJb/wf-2.jpg)

Primary page layout showing upper section (with title and account/site button) and lower section (with navigation column and content area).
![Wireframe 3](https://i.ibb.co/ph2qR1z/wf-3.jpg)

Character details layouts. Initial design (top left) and final design (bottom right).
![Wireframe 4](https://i.ibb.co/pQLZCZC/wf-4.jpg)

### Technologies Used
- [React](https://reactjs.org/)
- [React Router](https://www.npmjs.com/package/react-router)

### Next Steps
- Add list (all) and detail (single) pages for other entities (Ships, Species, Ranks)
- Add 'Service Record' section to Character Details page
- Add ability to edit Character species
- Add animations
..* Red Alert animation
..* 404 Glitch animation
..* Ambient animations (flashes, numbers, etc)
- [JOI validation](https://github.com/hapijs/joi)

---

## Back-end
### Entity Relationship Diagram
![ERD Diagram](https://i.ibb.co/TK8ZW81/Star-Trek-API.png)

### API Documentation
SQL Version:<br/>
[Check out the API Docs on Postman!](https://documenter.getpostman.com/view/9534886/SWE27KyV)

~Sequelize ORM Version:~<br/>
~[Check out the ORM API Docs on Postman!]~(https://documenter.getpostman.com/view/9534886/SWE28KtM)

### Object-Relational Mapping
As an additional task, I implemented a duplicate API that works through the Sequelize ORM library. To access this version of the API, simply prepend `/orm` to the request.

For example, get all characters with request `/characters` would become `/orm/characters`.

### Technologies Used
- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [SQLite3](https://www.npmjs.com/package/sqlite3)
- ERD via [dbdiagram.io](https://dbdiagram.io/home)
- API docs via [Postman](https://www.getpostman.com/)

### Next Steps
- Only parse request for JSON if JSON is expected (POST, PUT)
- [JOI validation](https://github.com/hapijs/joi)
