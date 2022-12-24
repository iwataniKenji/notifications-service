<h1 align="center">Notifications Service</h1>

<h2 align="center">Summary</h2>

<p align="center">
    <a href="#about">📙 About</a>
    <a href="#start">📖 How to Start</a>
    <a href="#features">💡 Features</a>
    <a href="#technologies">💻 Technologies</a>
</p>

<h4 align="center">
   ✔️ Notifications Service finished ✔️
</h4>

<h2 id="about">📙 About</H2>

<p><strong>Notifications Service</strong> is a simple microservice application developed for reinforcement of some concepts such as repository pattern, in memory database and prisma basics.  It includes unit testing for most of the content created.

<p>On this project development, the intention was to provide a very organized and well structured app architecture despite of its simplicity.</p>

<p>Originally created on Ignite Lab from <a href="https://www.rocketseat.com.br/">Rocketseat</a> and made by <a href="https://www.linkedin.com/in/kleverson-kenji-iwatani/">Kenji Iwatani</a></p>

---

<H2 id="start">📖 How to Start</H2>

```bash
# Clone this repository
$ git clone https://github.com/iwataniKenji/notifications-service

# Access the project directory
$ cd notifications-service

# Install dependencies
$ npm install

# Rename '.env.example' to '.env' and set your env variable
$ ren ".env.example" ".env"

# With a PostgreSQL running, run the migrations
$ npx prisma migrate dev

# Start the server
$ npm run dev
```

---

<H2 id="features">💡 Concepts</H2>

- [x] Microservice system
- [x] Dependency injection
- [x] Dependency inversion
- [x] Unit testing
- [x] Value object (split object attribute into separate class for validation and formatting purposes)
- [x] Repository pattern (between application and persistence layer)
- [x] In memory database (useful for unit testing without requiring database connection)
- [x] Factory pattern (abstracts creation of objects)
- [x] Mappers

---

<H2 id="technologies">💻 Technologies</H2>

- [x] <a href="https://nestjs.com/">NestJS</a>
- [x] <a href="https://www.typescriptlang.org/">Typescript</a>
- [x] <a href="https://www.prisma.io/">Prisma</a>
