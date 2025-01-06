import { useContext } from "react";
import ThemeContext from "../AuthProvider/ThemeProvider";
import { Link } from "react-router";

const BlogSection = () => {
    const {theme}= useContext(ThemeContext)
    const blogs = [
        {
          id: 1,
          title: "Top 10 Movies to Watch in 2025",
          description:
            "Discover the most anticipated movies of 2025 and why they deserve a spot on your watchlist.",
          author: "John Moviebuff",
          date: "January 3, 2025",
          image: "https://via.placeholder.com/600x400", // Replace with your movie image
        },
        {
          id: 2,
          title: "5 Underrated Sci-Fi Movies You Must Watch",
          description:
            "Uncover hidden sci-fi gems that deserve more recognition and explore fascinating futuristic worlds.",
          author: "Sarah Cinephile",
          date: "December 27, 2024",
          image: "https://via.placeholder.com/600x400", // Replace with your movie image
        },
        {
          id: 3,
          title: "The Evolution of Superhero Movies",
          description:
            "A deep dive into how superhero movies have evolved over the years, from the classics to modern blockbusters.",
          author: "Alex FilmFan",
          date: "November 15, 2024",
          image: "https://via.placeholder.com/600x400", // Replace with your movie image
        },
      ];

  return (
    <div className=" py-5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-4xl font-bold text-orange-500 text-center mb-8 ${theme === "dark" && " text-slate-300"}`}>
          Latest Blogs
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`${theme === "dark"? " bg-slate-700 text-slate-300 ":''} border border-gray-200 rounded-lg shadow-lg overflow-hidden`}
            >
             
              <div className={`p-6 ${theme === "dark" && " text-slate-300"}`}>
                <h3 className={`text-xl font-semibold text-gray-800 hover:text-blue-500 ${theme === "dark" && " text-slate-300"}`}>
                  {blog.title}
                </h3>
                <p className={`text-sm text-gray-500 mt-2 ${theme === "dark" && " text-slate-300"}`}>
                  By {blog.author} on {blog.date}
                </p>
                <p className={`text-gray-600 mt-4 ${theme === "dark" && " text-slate-300"}`}>{blog.description}</p>
                <Link to={`/detail/blog/${blog.id}`} className="mt-6 text-blue-600 font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
