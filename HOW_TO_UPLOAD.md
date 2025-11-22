# How to Upload Content to Your Portfolio

Since we are using a modern, high-performance setup (Next.js) without a complex database (to keep it free and simple), "uploading" content means adding it to your data file.

## Adding a New Activity

1.  **Prepare your Media**:
    *   Upload your images or videos to a hosting service (like Imgur, YouTube, or just put them in the `public/images` folder of this project).
    *   If putting in `public/images`, your URL will be `/images/your-image.jpg`.

2.  **Edit the Data File**:
    *   Open the file `src/lib/data.ts`.
    *   You will see a list of activities like this:
        ```typescript
        {
          slug: "my-new-project",
          title: "My New Project",
          description: "Short description...",
          date: "2023-12-01",
          tags: ["AI", "Robotics"],
          imageUrl: "/images/my-project.jpg",
          content: `...`
        }
        ```
    *   Copy one of the existing blocks and paste it at the top of the list.
    *   Update the fields with your new content.

3.  **Update the Site**:
    *   **If running locally**: The site updates automatically.
    *   **If deployed to Vercel**: Just push your changes to GitHub, and Vercel will automatically rebuild and update your site in minutes.

## Advanced: Using a CMS (Sanity.io)
If you prefer a visual dashboard (like WordPress) instead of editing code:
1.  Create a free account on [Sanity.io](https://www.sanity.io).
2.  Run `npm create sanity@latest` in this project folder to set it up.
3.  Connect the Sanity client to your Next.js app.
*(This requires more technical setup. Stick to the data file method for now if you want simplicity!)*
