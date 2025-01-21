import React from "react";
import MetaTags from "react-meta-tags";
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Was ist das Golf Handicap und warum ist es wichtig?",
      link: "/blog/was-ist-das-golf-handicap/",
      date: "16. Januar 2025",
      author: "Timo",
      content:
        "Es zeigt, wie gut du im Vergleich zum Durchschnitt eines Golfplatzesspielst und ermöglicht fairen Wettbewerb zwischen Spielern unterschiedlicher Fähigkeiten.",
    },
    {
      id: 2,
      title: "Die Geschichte des Golf Handicaps",
      link: "/blog/geschichte-des-golf-handicaps/",
      date: "18. Januar 2025",
      author: "Timo",
      content:
        "Mit seinen Wurzeln im 17. Jahrhundert hat dieses System im Laufe der Zeit viele Veränderungen durchgemacht, um den Bedürfnissen der Golfer gerecht zu werden.",
    },
    {
      id: 3,
      title:
        "Was ist Course Rating und Slope? Eine verständliche Erklärung zur Golfplatzbewertung",
      link: "/blog/was-ist-course-rating-und-slope/",
      date: "19. Januar 2025",
      author: "Timo",
      content:
        "Course Rating und Slope sind zwei wichtige Kennzahlen, die die Schwierigkeit eines Golfplatzes bewerten und dabei helfen, den Handicap-Index zu berechnen.",
    },
    {
      id: 4,
      title: "Mit 9-Loch-Runden das Handicap verbessern",
      link: "/blog/mit-9-loch-runden-das-handicap-verbessern/",
      date: "20. Januar 2025",
      author: "Timo",
      content:
        "Mit 9-Loch-Runden kannst du gezielt und effizient an deinem Handicap arbeiten.Course Rating und Slope sind zwei wichtige Kennzahlen, die die Schwierigkeit eines Golfplatzes bewerten und dabei helfen, den Handicap-Index zu berechnen.",
    },
  ];

  return (
    <React.Fragment>
      <MetaTags>
        <title>Der Blog von handicap.report</title>
        <meta
          name="description"
          content="Alles über das Golf Handicap und dessen Geschichte."
        />
        <link rel="canonical" href="https://handicap.report/blog/" />
      </MetaTags>

      <div className="blog-container">
        <h1 className="blog-header">handicap.report/blog</h1>
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <a href={post.link}>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-meta">
                  von {post.author} | {post.date}
                </p>
                <p className="post-content">{post.content}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
