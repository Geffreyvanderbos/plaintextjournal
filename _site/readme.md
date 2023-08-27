# Music Tech Directory for Artists

Music Tech Directory for Artists is an open-source directory featuring music technology projects and tools designed to empower artists in their creative journey. The directory is hosted at the URL `https://geff.re`. Learn more at [geff.re/about](https://geff.re/about).

## Acknowledgments

This project is based on the groundwork laid by Steph Ango's Slash Packaging initiative. I am are grateful for the inspiration and structure it provided. Learn more about Slash Packaging at [slashpackaging.org/about](https://slashpackaging.org/about).

## Contribute

If you would like to submit a new project or tool to the directory, open a pull request following the file format found in `/_directory` (see examples). Each page is a Markdown file with YAML metadata at the top. Your YAML metadata should include these fields:

| Field     | Required | Description                                       |
|-----------|----------|---------------------------------------------------|
| layout    | yes      | Set to `page`                                      |
| title     | yes      | Name of the project or tool                        |
| permalink | yes      | Unique slug, usually the project's or tool's name  |
| status    | yes      | Set to `live` or `404`                             |
| url       | yes      | Full URL of your website                           |
| domain    | yes      | Domain of the website                              |
| date      | yes      | Date of the submission to the directory            |
| tags      | no       | Up to 3 tags that describe the project or tool     |

Feel free to add a markdown-based description of the project underneath.

Alternatively, you can fill out [the form here](https://) and I will consider adding your page.

## Run the Site Locally

Music Tech Directory for Artists is a static site generated with Jekyll.

### Install the necessary dependencies

```bash
$ bundle
```

### Run Jekyll locally

```bash
$ bundle exec jekyll serve
```