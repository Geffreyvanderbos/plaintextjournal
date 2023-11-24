# The Plain Text Journal

Welcome to The Plain Text Journal – an open repository dedicated to sharing and finding tutorials, articles, and tips about using plain text as a writing tool. Our mission is to advocate for the benefits of plain text: its ease of use, flexibility, and enduring value.

## Contributing to The Plain Text Journal

We warmly welcome contributions from the community! Whether you're looking to add a new article, improve an existing one, or share a tip, here's how you can contribute.

### Prerequisites

- I assume you have, but you'll need some familiarity with [Markdown](https://www.markdownguide.org/getting-started/) for writing articles.
- Basic understanding of Git and GitHub.
- [Eleventy](https://www.11ty.dev/) (optional, for local testing).

### Adding or Improving Articles

1. **Fork the Repository**: Start by forking the [Plain Text Journal repository](https://github.com/Geffreyvanderbos/plaintextjournal) to your GitHub account.

2. **Clone Your Fork**: Clone the forked repository to your local machine using Git:
   ```bash
   git clone https://github.com/your-username/plain-text-journal.git
   cd plain-text-journal
   ```

3. **Create a New Branch**: Create a new branch for your changes:
   ```bash
   git checkout -b your-article-branch
   ```

4. **Add or Edit an Article**:
   - To **add a new article**, navigate to the `src/articles` folder. Use the `.md` (Markdown) files there as a template.
   - To **edit an existing article**, locate the article's `.md` file in the `src/articles` folder and make your changes.

5. **Write Your Article**: Write or update your article using Markdown. Make sure to follow our content guidelines (see `CONTRIBUTING.md` <- Coming soon 🚧).

6. **Commit Your Changes**: After making your changes, commit them to your branch:
   ```bash
   git add .
   git commit -m "Add/Update article on [Your Article Topic]"
   ```

7. **Push to GitHub**: Push your changes to your forked repository:
   ```bash
   git push origin your-article-branch
   ```

8. **Open a Pull Request**:
   - Go to the original "Plain Text Journal" repository on GitHub.
   - Click on the "Pull requests" tab and then the "New pull request" button.
   - Choose your forked repository and your branch.
   - Click on "Create pull request."
   - Provide a brief description of your changes and submit the pull request.

### Review Process

Once you submit a pull request, I, Geffrey, will review your submission. I may suggest some changes before merging your contribution.

### Local Development

If you wish to preview your changes locally before submitting, you can set up Eleventy on your machine:

1. Install Eleventy (if you haven't already):
   ```bash
   npm install -g @11ty/eleventy
   ```

2. Run Eleventy in your project directory:
   ```bash
   eleventy --serve
   ```

This will start a local server where you can preview your changes.

## Support

For any questions or support, please open an issue in the GitHub repository, and we'll be happy to help.

Thank you for contributing to The Plain Text Journal – together, we can make plain text documentation better for everyone!
