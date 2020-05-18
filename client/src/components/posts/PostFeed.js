import React, { Component } from "react";
import PropType from "prop-types";
import PostItem from "./PostItem";

class PostFeed extends Component {
  render() {
    const { posts } = this.props;

    return posts.map((post) => <PostItem key={post._id} post={post} />);
  }
}
PostFeed.propTypes = {
  posts: PropType.object.isRequired,
};
export default PostFeed;
