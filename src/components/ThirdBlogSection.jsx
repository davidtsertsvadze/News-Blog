import React, {useEffect, useState} from "react";

function ThirdBlogSection() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://david.local/wp-json/wp/v2/posts?_embed=true&per_page=2")
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => console.error(err));
    }, []);

    const formatDate = (dateString) => {
    const date = new Date(dateString);

    return date.toLocaleDateString("ka-GE",{
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

  const firstPost = posts[0];
  const secondPost = posts[1];

  const getCategoryName = (post) => {
    const terms = post?._embedded?.["wp:term"];
    if (!terms) return "";

    const categories = terms.find(
      termGroup => termGroup[0]?.taxonomy === "category"
    );

    return categories?.[0]?.name || "";
  };

return (
    <div className="w-full border-y border-black flex flex-row mt-1 pt-5">

      {/* Left Column */}
      {firstPost && (
        <div className="w-2/5 p-5">
            <div className="border-t border-dotted border-[color:var(--color-primary)] py-5 flex flex-row">
              <div className="w-1/2 mr-5">
                <img
                  className="aspect-[324/243]"
                  src={secondPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
                  alt={secondPost.title.rendered}
                 />
              </div>
              
              <div className="w-1/2">
                <h3
                  className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                  dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}
                />
                <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span> 
              </div>
            </div> 
            <div className="border-t border-dotted border-[color:var(--color-primary)] py-5 flex flex-row">
              <div className="w-1/2 mr-5">
                <img
                  className="aspect-[324/243]"
                  src={secondPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
                  alt={secondPost.title.rendered}
                 />
              </div>
              
              <div className="w-1/2">
                <h3
                  className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                  dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}
                />
                <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span> 
              </div>
            </div> 
            <div className="border-t border-dotted border-[color:var(--color-primary)] py-5 flex flex-row">
              <div className="w-1/2 mr-5">
                <img
                  className="aspect-[324/243]"
                  src={secondPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
                  alt={secondPost.title.rendered}
                 />
              </div>
              
              <div className="w-1/2">
                <h3
                  className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                  dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}
                />
                <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                </span> 
              </div>
            </div> 
            
        </div>
      )}

      {/* Divider */}
      <div className="w-px bg-[color:var(--color-primary)]"></div>

      {/* Midle Column */}
      {secondPost && (
        <div className="flex-1 p-5">
          <div className="pb-5">
            <img
              className="aspect-[324/243] w-[442px] mb-5"
              src={secondPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
              alt={secondPost.title.rendered}
            />

            <div>
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-[color:var(--color-amber-orange)]"></div>
                <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                  {getCategoryName(secondPost)}
                </span>
              </div>

              <h3
                className="text-[color:var(--color-black500)] text-2xl text-left font-normal font-anton"
                dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}
              />
            <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                 {formatDate(firstPost.date)}
            </span> 

            <p
              className="text-[color:var(--color-black500)] text-sm text-left font-vollkorn mt-3"
              dangerouslySetInnerHTML={{ __html: firstPost.excerpt.rendered }}
            />
            </div>
          </div> 
        </div>
      )}

      {/* Divider */}
      <div className="w-px bg-[color:var(--color-primary)]"></div>

      {/* Right Column */}
      {secondPost && (
        <div className="w-1/4 p-5">
            <div className="border-t border-dotted border-[color:var(--color-primary)] py-5 flex flex-row">
              <div>
                <h3
                  className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                  dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}
                />
                <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span> 
              </div>
            </div> 
            <div className="border-t border-dotted border-[color:var(--color-primary)] py-5 flex flex-row">
              <div>
                <h3
                  className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                  dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}
                />
                <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span> 
              </div>
            </div> 
            <div className="border-t border-dotted border-[color:var(--color-primary)] py-5 flex flex-row">
              <div>
                <h3
                  className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                  dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}
                />
                <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span> 
              </div>
            </div> 
        </div>
      )}
    </div>
  );
}

export default ThirdBlogSection;