import React, { use } from "react";

//hooks
import { useFetchDocuments } from "../hooks/useFetchDocuments";
import { useQuery } from "../hooks/useQuery";

//COMPONENTS
import PostDetail from "../components/PostDetail";
import { Link } from "react-router-dom";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div>
      {posts && posts.length === 0 && (
        <div>
          <p>Não foram encontrados psots a partir da sua busca...</p>
          <Link to="/" className="btn btn-dark">
            Voltar
          </Link>
        </div>
      )}
      {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
    </div>
  );
};

export default Search;
