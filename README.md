# Personal Portfolio

Welcome to my personal portfolio! This is a dynamic, content-driven web application built with React and Vite. It serves as a showcase of my skills, experience, projects, and educational background.

## 🚀 Features
- **Dynamic Content:** All text and data are extracted into a centralized `src/data/content.json` file. Updating the portfolio is as simple as editing the JSON file—no code changes required!
- **Modern Tech Stack:** Built with React 19 and Vite for lightning-fast performance and hot module replacement (HMR).
- **Interactive UI:** Features sleek 3D components utilizing `@react-three/fiber` and `@react-three/drei`, alongside smooth animations.
- **Responsive Design:** Fully styled using Tailwind CSS, ensuring a beautiful layout across all screen sizes.
- **Automated Deployments:** Fully integrated CI/CD pipeline using GitHub Actions to automatically build and deploy changes to GitHub Pages on every push to the `main` branch.

## 🛠️ Local Development

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aravindhan0510/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 How to Customize

To update the content on the website (e.g., adding a new project or updating your resume):
1. Navigate to `src/data/content.json`.
2. Modify the JSON fields as needed.
3. Save the file and push the changes to GitHub. The live website will automatically update!

## 📄 License
This project is open-source and available under the MIT License.
