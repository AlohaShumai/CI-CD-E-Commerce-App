# React E-Commerce App with CI/CD and TDD

This project is a responsive and dynamic **React E-Commerce App** that showcases modern development practices including:

- **CI/CD** with GitHub Actions and Vercel
- **Test-Driven Development (TDD)** using Jest and React Testing Library
- **Unit and integration testing**
- Automated deployment pipeline from GitHub to production

---

## Live Demo

 [View Live Site on Vercel](https://ci-cd-e-commerce-app.vercel.app)

---

## Features

- Product catalog with reusable `ProductCard` components
- Navigation bar using React Router
- Cart system with stateful logic
- Jest-based test coverage for components
- Continuous Integration via **GitHub Actions**
- Continuous Deployment to **Vercel**

---

## Test-Driven Development (TDD)

This project applies **Test-Driven Development** principles, with a focus on writing tests before implementing features.

## Tech Stack

- **React** – Core framework  
- **React Scripts** – Build, run, and test tooling  
- **Jest** – JavaScript testing framework  
- **React Testing Library** – Unit testing for React components  
- **GitHub Actions** – Continuous integration (CI)  
- **Vercel** – Continuous deployment (CD) and production hosting  

### Sample Tests:
- `Navbar.test.js`: Ensures branding is displayed
- `ProductCard.test.js`: Confirms product title renders
- `Cart.test.js`: Verifies cart item addition/removal

All tests are run via:

```bash
npm test

