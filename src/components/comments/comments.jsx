import React from "react";
import { string, shape, arrayOf } from "prop-types";

import { Comment } from "./comment";

export function Comments({ data }) {
  return (
    <div>
      {data.map(({ title, description }, index) => (
        <Comment
          key={`comment-${index}`}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
}

Comments.propTypes = {
  data: arrayOf(
    shape({
      title: string.isRequired,
      description: string.isRequired,
    })
  ),
};
